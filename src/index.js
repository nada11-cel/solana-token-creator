/**
 * Solana Token Creator
 * Create and deploy SPL tokens on Solana blockchain
 */

const { Connection, Keypair, PublicKey } = require("@solana/web3.js");
const {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} = require("@solana/spl-token");
const chalk = require("chalk");
const inquirer = require("inquirer");
const ora = require("ora");
require("dotenv").config();

const NETWORKS = {
  mainnet: "https://api.mainnet-beta.solana.com",
  devnet: "https://api.devnet.solana.com",
  testnet: "https://api.testnet.solana.com",
};

async function main() {
  console.log(chalk.cyan("\n╔════════════════════════════════════════╗"));
  console.log(
    chalk.cyan("║") +
      chalk.yellow.bold("    🪙 Solana Token Creator v1.0.0     ") +
      chalk.cyan("║")
  );
  console.log(chalk.cyan("╚════════════════════════════════════════╝\n"));

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "network",
      message: "Select network:",
      choices: ["devnet", "testnet", "mainnet"],
    },
    {
      type: "input",
      name: "name",
      message: "Token name:",
      default: "My Token",
    },
    {
      type: "input",
      name: "symbol",
      message: "Token symbol:",
      default: "MTK",
    },
    {
      type: "number",
      name: "decimals",
      message: "Decimals (0-9):",
      default: 9,
    },
    {
      type: "number",
      name: "supply",
      message: "Initial supply:",
      default: 1000000,
    },
  ]);

  const spinner = ora("Connecting to Solana...").start();

  try {
    const connection = new Connection(NETWORKS[answers.network], "confirmed");
    spinner.succeed("Connected to " + answers.network);

    // Check for wallet
    spinner.start("Loading wallet...");

    let keypair;
    if (process.env.PRIVATE_KEY) {
      const secretKey = JSON.parse(process.env.PRIVATE_KEY);
      keypair = Keypair.fromSecretKey(Uint8Array.from(secretKey));
      spinner.succeed(
        "Wallet loaded: " + keypair.publicKey.toBase58().slice(0, 8) + "..."
      );
    } else {
      spinner.warn("No wallet found. Set PRIVATE_KEY in .env file");
      console.log(
        chalk.yellow("\nTo create a token, you need a Solana wallet.")
      );
      console.log(chalk.gray("Create one at: https://phantom.app\n"));
      return;
    }

    // Create token
    spinner.start("Creating token mint...");

    const mint = await createMint(
      connection,
      keypair,
      keypair.publicKey,
      keypair.publicKey,
      answers.decimals
    );

    spinner.succeed("Token created: " + mint.toBase58());

    // Create token account
    spinner.start("Creating token account...");

    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );

    spinner.succeed("Token account: " + tokenAccount.address.toBase58());

    // Mint initial supply
    spinner.start("Minting initial supply...");

    await mintTo(
      connection,
      keypair,
      mint,
      tokenAccount.address,
      keypair,
      answers.supply * Math.pow(10, answers.decimals)
    );

    spinner.succeed(
      "Minted " + answers.supply.toLocaleString() + " " + answers.symbol
    );

    // Summary
    console.log(chalk.green("\n✅ Token created successfully!\n"));
    console.log(chalk.white("Token Details:"));
    console.log(chalk.gray("─".repeat(40)));
    console.log(chalk.white("Name:     ") + chalk.cyan(answers.name));
    console.log(chalk.white("Symbol:   ") + chalk.cyan(answers.symbol));
    console.log(chalk.white("Decimals: ") + chalk.cyan(answers.decimals));
    console.log(
      chalk.white("Supply:   ") + chalk.cyan(answers.supply.toLocaleString())
    );
    console.log(chalk.white("Mint:     ") + chalk.cyan(mint.toBase58()));
    console.log(chalk.white("Network:  ") + chalk.cyan(answers.network));
    console.log(chalk.gray("─".repeat(40)));

    if (answers.network === "devnet") {
      console.log(chalk.gray("\nView on Solscan:"));
      console.log(
        chalk.blue(
          "https://solscan.io/token/" + mint.toBase58() + "?cluster=devnet"
        )
      );
    }
  } catch (error) {
    spinner.fail("Error: " + error.message);
    console.log(chalk.red("\nMake sure you have:"));
    console.log(chalk.gray("1. A valid wallet with SOL for fees"));
    console.log(chalk.gray("2. Correct network selected"));
    console.log(chalk.gray("3. PRIVATE_KEY set in .env file"));
  }
}

main().catch(console.error);

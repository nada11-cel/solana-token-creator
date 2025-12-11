/**
 * Keypair utilities for Solana Token Creator
 */

const { Keypair } = require("@solana/web3.js");
const fs = require("fs");
const path = require("path");
const os = require("os");

/**
 * Load keypair from environment or Solana CLI config
 */
function loadKeypair() {
  // Try environment variable first
  if (process.env.PRIVATE_KEY) {
    try {
      const secretKey = JSON.parse(process.env.PRIVATE_KEY);
      return Keypair.fromSecretKey(Uint8Array.from(secretKey));
    } catch (e) {
      throw new Error("Invalid PRIVATE_KEY format in .env");
    }
  }

  // Try Solana CLI default location
  const solanaKeyPath = path.join(os.homedir(), ".config", "solana", "id.json");
  if (fs.existsSync(solanaKeyPath)) {
    try {
      const secretKey = JSON.parse(fs.readFileSync(solanaKeyPath, "utf8"));
      return Keypair.fromSecretKey(Uint8Array.from(secretKey));
    } catch (e) {
      throw new Error("Could not load Solana CLI wallet");
    }
  }

  return null;
}

/**
 * Get wallet balance
 */
async function getBalance(connection, publicKey) {
  const balance = await connection.getBalance(publicKey);
  return balance / 1e9; // Convert lamports to SOL
}

/**
 * Format public key for display
 */
function formatAddress(publicKey, length = 8) {
  const addr = publicKey.toBase58();
  return `${addr.slice(0, length)}...${addr.slice(-4)}`;
}

module.exports = {
  loadKeypair,
  getBalance,
  formatAddress,
};

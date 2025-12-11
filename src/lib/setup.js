/**
 * Solana Token Creator - Setup Script
 * Validates environment and initializes dependencies
 */

const fs = require("fs");
const path = require("path");

const VERSION = "1.2.0";

console.log(`\n🚀 Solana Token Creator v${VERSION}\n`);
console.log("Running post-install setup...\n");

// Check Node version
const nodeVersion = process.version.match(/^v(\d+)/)[1];
if (parseInt(nodeVersion) < 16) {
  console.log("⚠️  Warning: Node.js 16+ recommended\n");
}

// Check for .env file
const envPath = path.join(process.cwd(), ".env");
const envExamplePath = path.join(process.cwd(), ".env.example");

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  console.log("📝 Creating .env from .env.example...");
  fs.copyFileSync(envExamplePath, envPath);
  console.log("✓ .env file created\n");
}

// Detect Solana CLI configuration
try {
  const { initConfig } = require("./solana-config");
  const config = initConfig();

  if (config.installed) {
    console.log("✓ Solana CLI detected");
    if (config.keypairPath) {
      console.log("✓ Default keypair found");
    }
    if (config.network) {
      console.log(`✓ Network: ${config.network}`);
    }
  } else {
    console.log("ℹ Solana CLI not detected - you can still use this tool");
  }
} catch (_) {}

console.log("\n✓ Setup complete!\n");
console.log("Next steps:");
console.log("  1. Add your wallet private key to .env");
console.log("  2. Run: npm start\n");

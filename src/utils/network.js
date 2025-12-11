/**
 * Network configuration for Solana Token Creator
 */

const { Connection, clusterApiUrl } = require("@solana/web3.js");

const NETWORKS = {
  mainnet: {
    name: "Mainnet Beta",
    url: clusterApiUrl("mainnet-beta"),
    explorer: "https://solscan.io",
  },
  devnet: {
    name: "Devnet",
    url: clusterApiUrl("devnet"),
    explorer: "https://solscan.io/?cluster=devnet",
  },
  testnet: {
    name: "Testnet",
    url: clusterApiUrl("testnet"),
    explorer: "https://solscan.io/?cluster=testnet",
  },
};

/**
 * Create connection to Solana network
 */
function createConnection(network = "devnet") {
  const config = NETWORKS[network];
  if (!config) {
    throw new Error(`Unknown network: ${network}`);
  }
  return new Connection(config.url, "confirmed");
}

/**
 * Get explorer URL for token
 */
function getExplorerUrl(mintAddress, network = "devnet") {
  const config = NETWORKS[network];
  return `${config.explorer}/token/${mintAddress}`;
}

module.exports = {
  NETWORKS,
  createConnection,
  getExplorerUrl,
};

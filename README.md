<div align="center">

<img src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png" width="120" alt="Solana">

# Solana Token Creator

### Launch Your Meme Token on Pump.fun in 2 Simple Steps

[![Solana](https://img.shields.io/badge/Solana-9945FF?style=for-the-badge&logo=solana&logoColor=white)](https://solana.com)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Stars](https://img.shields.io/github/stars/auditixus/solana-token-creator?style=for-the-badge)](https://github.com/auditixus/solana-token-creator)

<br>

<img src="https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75" width="40" alt="Pump.fun"> **Compatible with Pump.fun** | **NO GAS FEES on Devnet** | **Ready in 60 Seconds**

<br>

[Get Started](#-quick-start) · [Features](#-features) · [Documentation](#-how-it-works) · [FAQ](#-faq)

</div>

---

## 🎯 Why This Tool?

Creating a meme token on Solana has never been easier. Whether you're launching the next **$BONK**, **$WIF**, or **$PEPE**, this tool handles all the technical complexity for you.

<div align="center">

| Traditional Way             | With This Tool                  |
| --------------------------- | ------------------------------- |
| ❌ Learn Rust/Anchor        | ✅ Just run `npm start`         |
| ❌ Write smart contracts    | ✅ Automatic SPL token creation |
| ❌ Complex deployment       | ✅ 2 simple steps               |
| ❌ Pay gas fees for testing | ✅ **FREE on devnet**           |

</div>

---

## ✨ Features

<div align="center">

| Feature                   | Description                              |
| ------------------------- | ---------------------------------------- |
| 🆓 **Zero Gas Fees**      | Test unlimited tokens on devnet for FREE |
| ⚡ **Instant Deploy**     | Create your token in under 60 seconds    |
| 🎨 **Full Customization** | Set name, symbol, decimals, and supply   |
| 🔐 **Secure**             | Private keys never leave your machine    |
| 📱 **Wallet Compatible**  | Works with Phantom, Solflare, Backpack   |
| 🚀 **Pump.fun Ready**     | Tokens compatible with Pump.fun listing  |

</div>

---

## 🚀 Quick Start

### Step 1: Install

```bash
git clone https://github.com/auditixus/solana-token-creator.git
cd solana-token-creator
npm install
```

### Step 2: Create Your Token

```bash
npm start
```

**That's it!** Follow the interactive prompts and your token will be live on Solana.

---

## 📖 How It Works

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   1. CONFIGURE        2. DEPLOY           3. DONE!         │
│   ────────────        ─────────           ────────         │
│                                                             │
│   • Token Name        • SPL Token         • View on        │
│   • Symbol            • Mint Account        Solscan        │
│   • Supply            • Token Account     • Trade on       │
│   • Decimals                                Pump.fun       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

</div>

### Interactive CLI

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║          🪙  SOLANA TOKEN CREATOR v1.2.0  🪙                ║
║                                                              ║
║              Create SPL Tokens - NO GAS FEES                 ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

? Select network:
  ❯ devnet (FREE - Recommended for testing)
    testnet (FREE)
    mainnet-beta (Requires SOL)

? Token name: PepeSolana
? Token symbol: $PEPE
? Decimals (0-9): 9
? Initial supply: 1000000000

⠋ Creating token on Solana...

✅ SUCCESS! Token created!

┌────────────────────────────────────────────────────────────┐
│  Token Details                                             │
├────────────────────────────────────────────────────────────┤
│  Name:      PepeSolana                                     │
│  Symbol:    $PEPE                                          │
│  Supply:    1,000,000,000                                  │
│  Decimals:  9                                              │
│  Mint:      7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU  │
│  Network:   devnet                                         │
└────────────────────────────────────────────────────────────┘

🔗 Solscan: https://solscan.io/token/7xKXtg...?cluster=devnet
```

---

## ⚙️ Configuration

### Environment Setup

```bash
cp .env.example .env
```

Edit `.env` and add your wallet:

```env
# Export from Phantom: Settings → Security → Export Private Key
PRIVATE_KEY=[your,wallet,private,key,as,array]

# Optional: Custom RPC endpoint
RPC_URL=https://api.devnet.solana.com
```

---

## 🌐 Network Options

| Network     | Gas Cost  | Best For              |
| ----------- | --------- | --------------------- |
| **Devnet**  | 🆓 FREE   | Development & Testing |
| **Testnet** | 🆓 FREE   | Pre-launch validation |
| **Mainnet** | ~0.01 SOL | Production launch     |

### Get Free Devnet SOL

```bash
solana airdrop 2 YOUR_WALLET_ADDRESS --url devnet
```

Or use the official [Solana Faucet](https://faucet.solana.com/)

---

## 🔗 Pump.fun Integration

After creating your token, you can list it on [Pump.fun](https://pump.fun):

1. Create your token using this tool (mainnet)
2. Go to Pump.fun and connect your wallet
3. Your token is ready for trading!

<div align="center">
<img src="https://pbs.twimg.com/profile_images/1745845028265324544/MW0Z6VGI_400x400.jpg" width="60" alt="Pump.fun">

**Pump.fun** - The #1 platform for Solana meme tokens

</div>

---

## 📋 Requirements

- **Node.js** 16.0 or higher
- **Solana Wallet** (Phantom, Solflare, or Backpack)
- **SOL** for mainnet deployment (~0.01 SOL)

---

## ❓ FAQ

<details>
<summary><b>Is this free to use?</b></summary>

Yes! The tool is completely free. You only pay Solana network fees when deploying to mainnet (~0.01 SOL). Devnet and testnet are 100% free.

</details>

<details>
<summary><b>Is my private key safe?</b></summary>

Your private key never leaves your machine. All transactions are signed locally.

</details>

<details>
<summary><b>Can I list my token on Pump.fun?</b></summary>

Yes! Tokens created with this tool are standard SPL tokens, fully compatible with Pump.fun, Raydium, Jupiter, and all Solana DEXs.

</details>

<details>
<summary><b>How do I add a logo to my token?</b></summary>

Token metadata (including logo) can be added via Metaplex. This feature is coming in a future update.

</details>

---

## 🛣️ Roadmap

- [x] SPL Token Creation
- [x] Custom metadata support
- [x] Multi-network support
- [ ] Token logo upload (IPFS/Arweave)
- [ ] Raydium liquidity pool creation
- [ ] Mint/Freeze authority management
- [ ] Batch airdrop tool
- [ ] Web interface

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## ⚠️ Disclaimer

This tool is provided for **educational and legitimate purposes only**. Users are responsible for complying with all applicable laws and regulations. Creating tokens for fraudulent purposes is illegal. Always test on devnet before mainnet deployment.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for the Solana community**

<img src="https://solana.com/src/img/branding/solanaLogoMark.png" width="30" alt="Solana">

[⬆ Back to top](#solana-token-creator)

</div>

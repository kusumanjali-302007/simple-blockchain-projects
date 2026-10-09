# Decentralized Marketplace

Marketplace listing and purchase accounting. It deliberately keeps NFT custody external; pair it with an approved ERC-721 transfer flow for production.

## Requirements
- Node.js 18+
- npm

## Install
```bash
npm install
```

## Run tests
```bash
npm test
```

## Local deployment
Terminal 1:
```bash
npm run node
```
Terminal 2:
```bash
npm run deploy:local
```

## Compile
```bash
npm run compile
```

This project is intentionally self-contained and uses Hardhat's local Ethereum network.

## Optional browser frontend
Open `frontend/index.html` after starting a local Hardhat node. Connect a browser wallet configured for the local Hardhat network. The contract address can be wired into `frontend/app.js` after deployment.

# ERC-20 Custom Token

Educational ERC-20-style token implementing balances, approvals, transfers, mint and burn.

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

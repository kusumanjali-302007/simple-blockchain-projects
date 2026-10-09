const { ethers } = require("hardhat");
async function main(){ const C=await ethers.getContractFactory("SimpleWallet"); const c=await C.deploy(); await c.waitForDeployment(); console.log("SimpleWallet deployed to:", await c.getAddress()); }
main().catch(e=>{console.error(e);process.exitCode=1});

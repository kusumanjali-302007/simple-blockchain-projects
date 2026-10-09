const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Escrow",()=>{it("funds and releases",async()=>{const [b,s,a]=await ethers.getSigners();const C=await ethers.getContractFactory("Escrow");const c=await C.deploy(s.address,a.address);await c.fund({value:ethers.parseEther("1")});await c.release();expect(await ethers.provider.getBalance(c.getAddress())).eq(0n);});});
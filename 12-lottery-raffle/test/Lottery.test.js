const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Lottery",()=>{it("accepts entries",async()=>{const [m,p]=await ethers.getSigners();const C=await ethers.getContractFactory("Lottery");const c=await C.deploy(ethers.parseEther("0.1"));await c.connect(p).enter({value:ethers.parseEther("0.1")});expect(await c.players(0)).eq(p.address);});});
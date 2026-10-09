const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Crowdfunding",()=>{it("accepts contributions",async()=>{const [a]=await ethers.getSigners();const C=await ethers.getContractFactory("Crowdfunding");const c=await C.deploy(ethers.parseEther("1"),3600);await c.contribute({value:ethers.parseEther("0.2")});expect(await c.raised()).eq(ethers.parseEther("0.2"));});});
const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Guestbook",()=>{it("stores messages",async()=>{const C=await ethers.getContractFactory("Guestbook");const c=await C.deploy();await c.postMessage("Hello blockchain");expect(await c.messageCount()).eq(1n);expect((await c.getMessages())[0].text).eq("Hello blockchain");});});
const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("OnChainTodo",()=>{it("creates and completes",async()=>{const C=await ethers.getContractFactory("OnChainTodo");const c=await C.deploy();await c.addTask("Learn Solidity");await c.completeTask(0);const t=await c.getTasks();expect(t[0].text).eq("Learn Solidity");expect(t[0].completed).true;});});
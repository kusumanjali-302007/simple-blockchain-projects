// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
contract DigitalNotary {
 struct Record { uint256 timestamp; address registrant; bool exists; }
 mapping(bytes32=>Record) private records;
 event FileRegistered(bytes32 indexed fileHash,address indexed registrant,uint256 timestamp);
 function registerFile(bytes32 fileHash) external { require(fileHash!=bytes32(0),"Invalid hash"); require(!records[fileHash].exists,"Already registered"); records[fileHash]=Record(block.timestamp,msg.sender,true); emit FileRegistered(fileHash,msg.sender,block.timestamp); }
 function verifyFile(bytes32 fileHash) external view returns(bool,uint256,address){ Record memory r=records[fileHash]; return (r.exists,r.timestamp,r.registrant); }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./GhostNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Fusion is Ownable {
    GhostNFT public ghostNFT;
    
    constructor(address _ghostNFT) {
        ghostNFT = GhostNFT(_ghostNFT);
    }
}
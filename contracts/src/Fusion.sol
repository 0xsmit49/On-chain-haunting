// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./GhostNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Fusion is Ownable {
    GhostNFT public ghostNFT;
    
    constructor(address _ghostNFT) {
        ghostNFT = GhostNFT(_ghostNFT);
    }

    // Add after constructor
mapping(uint256 => bool) public fusionCooldown;
uint256 public constant COOLDOWN_BLOCKS = 100;

event GhostsFused(uint256 indexed parent1, uint256 indexed parent2, uint256 indexed newGhost);
}
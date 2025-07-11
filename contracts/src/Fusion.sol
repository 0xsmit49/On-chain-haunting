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

// Add main fusion function
function fuseGhosts(uint256 ghost1Id, uint256 ghost2Id, string memory newName) external returns (uint256) {
    require(ghostNFT.ownerOf(ghost1Id) == msg.sender, "Not owner of ghost 1");
    require(ghostNFT.ownerOf(ghost2Id) == msg.sender, "Not owner of ghost 2");
    require(ghost1Id != ghost2Id, "Cannot fuse with itself");
    require(!fusionCooldown[ghost1Id] && !fusionCooldown[ghost2Id], "Ghost in cooldown");
    
    GhostNFT.Ghost memory parent1 = ghostNFT.getGhost(ghost1Id);
    GhostNFT.Ghost memory parent2 = ghostNFT.getGhost(ghost2Id);
    
    require(!parent1.isPossessing && !parent2.isPossessing, "Cannot fuse possessing ghosts");
    
    // Burn parent ghosts
    ghostNFT.transferFrom(msg.sender, address(this), ghost1Id);
    ghostNFT.transferFrom(msg.sender, address(this), ghost2Id);
    
    // Create new ghost with combined traits
    uint256 newGhostId = ghostNFT.summonGhost(newName);
    
    // Set cooldown for fusion participants
    fusionCooldown[ghost1Id] = true;
    fusionCooldown[ghost2Id] = true;
    
    emit GhostsFused(ghost1Id, ghost2Id, newGhostId);
    return newGhostId;
}
}
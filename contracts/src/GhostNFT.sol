// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GhostNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    
    constructor() ERC721("GhostNFT", "GHOST") {}
    // Add after _tokenIdCounter
enum GhostType { Phantom, Poltergeist, Wraith, Specter, Ectoshadow }

// Add Ghost struct
struct Ghost {
    string name;
    GhostType ghostType;
    uint256 power;
    uint256 charm;
    uint256 chaos;
    uint256 birthBlock;
    bool isPossessing;
    address possessedWallet;
}

mapping(uint256 => Ghost) public ghosts;
mapping(address => uint256[]) public userGhosts;
}
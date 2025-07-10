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
// Add possession tracking
mapping(address => bool) public isPossessed;

// Add events
event GhostSummoned(uint256 indexed tokenId, string name, GhostType ghostType);
event PossessionStarted(uint256 indexed ghostId, address indexed wallet);
event PossessionEnded(uint256 indexed ghostId, address indexed wallet);

// Add summon function
function summonGhost(string memory name) external returns (uint256) {
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    
    // Generate random traits using block data
    uint256 randomSeed = uint256(keccak256(abi.encodePacked(
        block.timestamp,
        block.difficulty,
        msg.sender,
        tokenId
    )));
    
    GhostType ghostType = GhostType(randomSeed % 5);
    uint256 power = (randomSeed >> 8) % 100 + 1;
    uint256 charm = (randomSeed >> 16) % 100 + 1;
    uint256 chaos = (randomSeed >> 24) % 100 + 1;
    
    ghosts[tokenId] = Ghost({
        name: name,
        ghostType: ghostType,
        power: power,
        charm: charm,
        chaos: chaos,
        birthBlock: block.number,
        isPossessing: false,
        possessedWallet: address(0)
    });
    
    _safeMint(msg.sender, tokenId);
    userGhosts[msg.sender].push(tokenId);
    
    emit GhostSummoned(tokenId, name, ghostType);
    return tokenId;
}

// Add possession management functions
function startPossession(uint256 ghostId, address wallet) external {
    require(ownerOf(ghostId) == msg.sender, "Not ghost owner");
    require(!ghosts[ghostId].isPossessing, "Ghost already possessing");
    require(!isPossessed[wallet], "Wallet already possessed");
    
    ghosts[ghostId].isPossessing = true;
    ghosts[ghostId].possessedWallet = wallet;
    isPossessed[wallet] = true;
    
    emit PossessionStarted(ghostId, wallet);
}

function endPossession(uint256 ghostId) external {
    require(ownerOf(ghostId) == msg.sender, "Not ghost owner");
    require(ghosts[ghostId].isPossessing, "Ghost not possessing");
    
    address wallet = ghosts[ghostId].possessedWallet;
    ghosts[ghostId].isPossessing = false;
    ghosts[ghostId].possessedWallet = address(0);
    isPossessed[wallet] = false;
    
    emit PossessionEnded(ghostId, wallet);
}

function getGhost(uint256 tokenId) external view returns (Ghost memory) {
    require(_exists(tokenId), "Ghost does not exist");
    return ghosts[tokenId];
}

function getUserGhosts(address user) external view returns (uint256[] memory) {
    return userGhosts[user];
}
}
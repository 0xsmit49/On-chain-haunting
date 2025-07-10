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
}
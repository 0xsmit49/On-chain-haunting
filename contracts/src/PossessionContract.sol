// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./GhostNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PossessionContract is Ownable {
    GhostNFT public ghostNFT;
    
    struct Riddle {
        string question;
        bytes32 answerHash;
        uint256 difficulty;
        bool isActive;
    }
    
    mapping(uint256 => Riddle) public riddles;
    mapping(uint256 => uint256) public ghostRiddles;
    mapping(address => uint256) public possessionAttempts;
    mapping(address => uint256) public lastAttemptBlock;
    
    uint256 public riddleCounter;
    uint256 public constant ATTEMPT_COOLDOWN = 10; // blocks
    uint256 public constant MAX_ATTEMPTS = 3;
    
    event RiddleCreated(uint256 indexed riddleId, uint256 difficulty);
    event PossessionAttempted(address indexed user, uint256 indexed ghostId, bool success);
    event WalletPossessed(address indexed wallet, uint256 indexed ghostId);
    event WalletExorcised(address indexed wallet, uint256 indexed ghostId);
    
    constructor(address _ghostNFT) {
        ghostNFT = GhostNFT(_ghostNFT);
    }
    
    function createRiddle(string memory question, string memory answer, uint256 difficulty) external onlyOwner {
        bytes32 answerHash = keccak256(abi.encodePacked(answer));
        
        riddles[riddleCounter] = Riddle({
            question: question,
            answerHash: answerHash,
            difficulty: difficulty,
            isActive: true
        });
        
        emit RiddleCreated(riddleCounter, difficulty);
        riddleCounter++;
    }
    
    function assignRiddleToGhost(uint256 ghostId, uint256 riddleId) external onlyOwner {
        require(ghostNFT._exists(ghostId), "Ghost does not exist");
        require(riddles[riddleId].isActive, "Riddle not active");
        
        ghostRiddles[ghostId] = riddleId;
    }
    
    function attemptPossession(uint256 targetGhostId, string memory answer) external {
        require(block.number >= lastAttemptBlock[msg.sender] + ATTEMPT_COOLDOWN, "Cooldown active");
        require(possessionAttempts[msg.sender] < MAX_ATTEMPTS, "Max attempts reached");
        require(ghostNFT._exists(targetGhostId), "Ghost does not exist");
        
        uint256 riddleId = ghostRiddles[targetGhostId];
        require(riddles[riddleId].isActive, "No riddle assigned");
        
        lastAttemptBlock[msg.sender] = block.number;
        possessionAttempts[msg.sender]++;
        
        bytes32 answerHash = keccak256(abi.encodePacked(answer));
        bool success = answerHash == riddles[riddleId].answerHash;
        
        if (success) {
            ghostNFT.startPossession(targetGhostId, msg.sender);
            possessionAttempts[msg.sender] = 0; // Reset attempts on success
        } else {
            // Strengthen ghost on wrong answer
            GhostNFT.Ghost memory ghost = ghostNFT.getGhost(targetGhostId);
            // Additional logic to increase ghost power
        }
        
        emit PossessionAttempted(msg.sender, targetGhostId, success);
    }
    
    function possessWallet(address wallet, uint256 ghostId) external {
        require(ghostNFT.ownerOf(ghostId) == msg.sender, "Not ghost owner");
        require(!ghostNFT.isPossessed(wallet), "Wallet already possessed");
        
        ghostNFT.startPossession(ghostId, wallet);
        emit WalletPossessed(wallet, ghostId);
    }
    
    function exorcise(uint256 ghostId) external {
        require(ghostNFT.ownerOf(ghostId) == msg.sender, "Not ghost owner");
        
        GhostNFT.Ghost memory ghost = ghostNFT.getGhost(ghostId);
        require(ghost.isPossessing, "Ghost not possessing");
        
        ghostNFT.endPossession(ghostId);
        emit WalletExorcised(ghost.possessedWallet, ghostId);
    }
    
    function getRiddle(uint256 riddleId) external view returns (string memory question, uint256 difficulty) {
        require(riddles[riddleId].isActive, "Riddle not active");
        return (riddles[riddleId].question, riddles[riddleId].difficulty);
    }
    
    function resetAttempts(address user) external onlyOwner {
        possessionAttempts[user] = 0;
    }
}
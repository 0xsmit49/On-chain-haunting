// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/GhostNFT.sol";
import "../src/FusionContract.sol";
import "../src/PossessionContract.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        // Deploy GhostNFT
        GhostNFT ghostNFT = new GhostNFT();
        console.log("GhostNFT deployed at:", address(ghostNFT));
        
        // Deploy FusionContract
        FusionContract fusion = new FusionContract(address(ghostNFT));
        console.log("FusionContract deployed at:", address(fusion));
        
        // Deploy PossessionContract
        PossessionContract possession = new PossessionContract(address(ghostNFT));
        console.log("PossessionContract deployed at:", address(possession));
        
        vm.stopBroadcast();
    }
}
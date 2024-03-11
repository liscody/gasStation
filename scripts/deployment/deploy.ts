// This is a script for deployment and automatically verification of all the contracts (`contracts/`).

import { deployGasLZV2 } from "./separately/exported-functions/deployGasLZV2";

async function main() {
    // Deployment and verification of the `contracts/GasLZV2.sol`.
    await deployGasLZV2();
}

// This pattern is recommended to be able to use async/await everywhere and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// npx hardhat run scripts/deployment/deploy.ts --network mumbai

// This is a script for deployment and automatically verification of the `contracts/GasLZV2.sol`.

import { deployGasLZV2 } from "./exported-functions/deployGasLZV2";

async function main() {
    await deployGasLZV2();
}

// This pattern is recommended to be able to use async/await everywhere and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

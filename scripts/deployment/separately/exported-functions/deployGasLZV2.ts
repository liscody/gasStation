// This script contains the function for deployment and verification of the `contracts/GasLZV2.sol`.

import hre from "hardhat";
const ethers = hre.ethers;

import type { GasLZV2 } from "../../../../typechain-types";

async function deployGasLZV2(): Promise<GasLZV2> {
    /*
     * Hardhat always runs the compile task when running scripts with its command line interface.
     *
     * If this script is run directly using `node`, then it should be called compile manually
     * to make sure everything is compiled.
     */
    // await hre.run("compile");

    const [deployer] = await ethers.getSigners();

    console.log("Deployer address:", deployer.address);

    // to do 
    // change the owner and endpoint
   const _owner = deployer.address
   const  _endpoint = "0x6edce65403992e310a62460808c4b910d972f10f"


    // Deployment.
    const GasLZV2 = (await ethers.getContractFactory("GasLZV2")).connect(deployer);
    const gas: GasLZV2 = await GasLZV2.deploy(
        _owner,
        _endpoint
    );

    await gas.deployed();

    console.log(`\`GasLZV2\` is deployed to ${gas.address}.`);

    // Verification of the deployed contract.
    if (hre.network.name !== "hardhat" && hre.network.name !== "localhost") {
        console.log("Sleeping before verification...");
        await new Promise((resolve) => setTimeout(resolve, 60000)); // 60 seconds.

        await hre.run("verify:verify", { address: gas.address, constructorArguments: [
            _owner,
            _endpoint
        ] });
    }

    return gas;
}

export { deployGasLZV2 };

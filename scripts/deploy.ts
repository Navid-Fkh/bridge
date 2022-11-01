import { ethers } from "hardhat";

async function main() {
    const Bridge = await ethers.getContractFactory("DeusBridge")
    console.log("Deploying DeusBridge...")
    const bridge = await upgrades.deployProxy(Bridge, [42], { initializer: 'initialize' })

    console.log(bridge.address," bridge(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(bridge.address)," getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(bridge.address)," getAdminAddress")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

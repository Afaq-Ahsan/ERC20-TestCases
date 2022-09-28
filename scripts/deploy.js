
const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("VavelToken");
  const lock = await Lock.deploy();

 const a = await lock.deployed();

  console.log("Contract is deployed on :", lock.address);
  console.log("Contract is :",a );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function main() {

  const shuffleContract = await hre.ethers.getContractFactory("ShuffleDao");
  const contract = await shuffleContract.deploy();
  await contract.deployed();

  console.log(`Contract deployed to ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const address = '0x17B803Da3d185053AF0E5006a8D7398019f0ded3';

async function main() {
    const contract = await hre.ethers.getContractAt("ShuffleDao", address);
    const buyin = await contract.buyin('0x67a634C89d77b6e5FcC769A75B246Ebd5BF95d58', '0x8B693F70A48b343D7E586f7De2F877c062042bA2', { value: 1 });
    console.log(buyin);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
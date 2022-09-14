const address = '0x17B803Da3d185053AF0E5006a8D7398019f0ded3';

async function main() {
    const contract = await hre.ethers.getContractAt("ShuffleDao", address);
    const sigKey = await contract.getSigKey('0x505FfF7F594b63F9A2FC0c98Ea7406ec2CD75C4F');
    console.log(sigKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
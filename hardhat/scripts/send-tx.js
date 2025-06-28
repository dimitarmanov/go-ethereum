const hre = require("hardhat");

async function main() {
  const [sender] = await hre.ethers.getSigners();

  console.log("Sending from:", sender.address);

  const tx = await sender.sendTransaction({
    to: sender.address,
    value: hre.ethers.parseEther("0.01"),
  });

  console.log("TX sent:", tx.hash);
  await tx.wait();
  console.log("✅ TX mined!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

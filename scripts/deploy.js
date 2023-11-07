const { ethers, run, network } = require("hardhat")

//npx hardhat run .\scripts\deploy.js
// async main
async function main() {
  const Ballot = await ethers.getContractFactory("Ballot")
  console.log("Deploying contract...")
  const ballot = await Ballot.deploy()
  await ballot.waitForDeployment()
  console.log(`Deployed contract to: ${ballot.address}`)
 
  // what happens when we deploy to our hardhat network?
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...")
    await ballot.deployTransaction.wait(2)
    await verify(ballot.address, [])
  }

}

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })


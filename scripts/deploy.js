const { ethers, run, network } = require("hardhat")

//npx hardhat run .\scripts\deploy.js
// async main
//"City Election",1699401600,1731024000,["0x85c74224865C5053e95498Aa81ed968002bfdD72","0x7f25A6Bc607aA77D8C9dda4EbF72cBD1eE3113F4"],["Nitin Gadkari", "Rahul Gandhi"],["BJP","Congress"]

async function main() {
  const Ballot = await ethers.getContractFactory("Ballot")
  console.log("Deploying contract...")
  const ballot = await Ballot.deploy("City Election",1699401600,1731024000,["0x85c74224865C5053e95498Aa81ed968002bfdD72","0x7f25A6Bc607aA77D8C9dda4EbF72cBD1eE3113F4"],["Nitin Gadkari", "Rahul Gandhi"],["BJP","Congress"])
  await ballot.waitForDeployment()
  console.log(`Deployed contract to: ${ballot.target}`)
 
  // what happens when we deploy to our hardhat network?
  // if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
  //   console.log("Waiting for block confirmations...")
  //   await ballot.deployTransaction.wait(2)
  //   await verify(ballot.address, [])
  // }

}

// const verify = async (contractAddress, args) => {
//   console.log("Verifying contract...")
//   try {
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguments: args,
//     })
//   } catch (e) {
//     if (e.message.toLowerCase().includes("already verified")) {
//       console.log("Already Verified!")
//     } else {
//       console.log(e)
//     }
//   }
// }

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })


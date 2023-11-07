require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
      sepolia: {
        url: process.env.REACT_APP_SEPOLIA_RPC_URL,
        accounts: [process.env.REACT_APP_AcDep_PRIVATE_KEY],
        chainId: 11155111,
      },
  }
};

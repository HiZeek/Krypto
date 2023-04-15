// https://eth-sepolia.g.alchemy.com/v2/PeeTSGEHffUjFXe-7uN1ponf62b2CHOM

require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/E4oJ9nGj_1b242PePTkLKTmaSHAEGGwg",
      accounts: [
        "4b2b55662618b6e4d88e6d953bebd065b720a26700c07ccb185bd08ac9cd8a69",
      ],
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};

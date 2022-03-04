require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  plugins: [
    'truffle-plugin-verify',
    'truffle-contract-size'
  ],
  api_keys:{
	bscscan: process.env.BSC_API_KEY
  },
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(process.env.TESTNET_MNEMONIC, process.env.TESTNET_NODE_URL),
      network_id: 97
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.MAINNET_MNEMONIC, process.env.MAINNET_NODE_URL),
      network_id: 56
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          //runs: 999999
          runs: 200
        },
        evmVersion: "istanbul"
      }
    },
  },
  db: {
    enabled: false
  }
};


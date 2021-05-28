module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
      bsc_testnet: {
        provider: () => new HDWalletProvider(
          privateKeys.split(','),
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
        network_id: 97,
        confirmations: 10,
        timeoutBlocks: 200,
        skipDryRun: true
      },
      bsc_mainnet: {
        provider: () => new HDWalletProvider(
          privateKeys.split(','),
          `https://bsc-dataseed1.binance.org`
        ),
        network_id: 56,
        confirmations: 10,
        timeoutBlocks: 200,
        skipDryRun: true
      }
    },
  
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: ">=0.4.21 <0.9.0",
      networkCheckTimeout: 999999,
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

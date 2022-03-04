// https://eth-ropsten.alchemyapi.io/v2/TFsFkdNCAarCizQCyN4Pat6BtAM-6Kxd

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TFsFkdNCAarCizQCyN4Pat6BtAM-6Kxd',
      accounts: ['89dbac85376197d72dbb3d790a974f10507bdeb7d51b80398015f4cf84a1753d'],
    },
  },
};
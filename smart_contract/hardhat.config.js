// https://eth-ropsten.alchemyapi.io/v2/_ThQv0XYX32ghQdqsrymKCinwBC_dT5i

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/_ThQv0XYX32ghQdqsrymKCinwBC_dT5i',
      accounts: ['1208fb72516dd6e332b99bb422fe8dbc66f294e8cec04eae5839b1a45d9a0e87']
    }
  }

}
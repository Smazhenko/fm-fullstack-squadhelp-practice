module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('banks', [
      {
        cardNumber: '4564654564564564',
        name: 'SquadHelp',
        expiry: '11/23',
        cvc: '453',
        balance: 0,
      },
      {
        cardNumber: '4111111111111111',
        name: 'yriy',
        expiry: '09/23',
        cvc: '505',
        balance: 5000,
      },
      {
        cardNumber: '4444444444444444',
        name: 'creator',
        expiry: '09/23',
        cvc: '505',
        balance: 0,
      },
    ], {});
  },

};

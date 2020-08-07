'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Empresas', [{
    id: '1',
    nome: 'AUTO POSTO FERRARI LTDA',
    documento: '01.018.631/0001-09',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()    
  }, {
    id: '2',
    nome: 'ANTONIO ALVES DE OLIVEIRA',
    documento: '176.895.706-15',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    id: '3',
    nome: 'TELEGON - TELECOMUNICACOES E ED. LTDA',
    documento: '00.936.285/0001-77',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Empresas', null, {});
  }
};

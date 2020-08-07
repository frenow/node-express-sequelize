'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    nome: DataTypes.STRING,
    documento: DataTypes.STRING
  }, {});
  Empresa.associate = function(models) {
    // associations can be defined here
  };
  return Empresa;
};
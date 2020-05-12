'use strict';
module.exports = (sequelize, DataTypes) => {
  const Calculator = sequelize.define('Calculator', {
    vara: DataTypes.DOUBLE,
    varb: DataTypes.DOUBLE,
    result: DataTypes.DOUBLE
  }, {});
  Calculator.associate = function(models) {
    // associations can be defined here
  };
  return Calculator;
};

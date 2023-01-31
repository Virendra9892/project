'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  token.init({
    candidateId: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expiry_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'token',
  });
  return token;
};
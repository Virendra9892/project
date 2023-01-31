'use strict';
const {
  Model
} = require('sequelize');
const config = require("config")
const jwt = require("jsonwebtoken");
module.exports = (sequelize, DataTypes) => {
  class candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      candidate.hasMany(models.job,{foreignKey:"candidate_id"})
    }
  }
  candidate.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'candidate',
  });

  // candidate.generateToken = (id,email)=>{
  //   let token = jwt.sign({email,id},config.get("jwtPrivateKey"));
  //   return token
  // }

  return candidate;
};
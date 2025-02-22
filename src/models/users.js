'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    uu_id: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  }); 

  users.associate = (models) => {
    users.belongsTo(models.role, {foreignKey: "role_id"})
  }
  return users;
};
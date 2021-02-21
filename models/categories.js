'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories.hasMany(models.Questions, {foreignKey: "category_id"}),
      Categories.hasMany(models.Answers, {foreignKey: "category_id"})
    }
  };
  Categories.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};
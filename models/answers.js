'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answers.hasOne(models.Users, {foreignKey: "id"}),
      Answers.hasOne(models.Questions, {foreignKey: "id"}),
      Answers.hasOne(models.Categories, {foreignKey: "id"})
    }
  };
  Answers.init({
    answer: DataTypes.TEXT,
    category_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    question_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answers',
  });
  return Answers;
};
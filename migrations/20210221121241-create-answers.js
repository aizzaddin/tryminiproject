'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(22)
      },
      answer: {
        type: Sequelize.TEXT
      },
      category_id: {
        type: Sequelize.STRING(22),
        relation: {
          model: "Categories",
          key: "id"
        }
      },
      user_id: {
        type: Sequelize.STRING(22),
        relation: {
          model: "Users",
          key: "id"
        }
      },
      question_id: {
        type: Sequelize.STRING(22),
        relation: {
          model: "Questions",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Answers');
  }
};
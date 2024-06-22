'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('USUARIOS', {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      NOME: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      SOBRENOME: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      EMAIL: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      TELEFONE: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      SENHA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('USUARIOS');
  }
};

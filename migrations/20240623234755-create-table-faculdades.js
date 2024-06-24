'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FACULDADES', {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      NOME_FACULDADE: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      SIGLA_FACULDADE: {
        type: Sequelize.STRING,
      },
      CIDADE: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CNPJ: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      TELEFONE: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('FACULDADES');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PONTOS', {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      NOME_PONTO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      RUA_PONTO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      BAIRRO_PONTO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CIDADE_PONTO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PONTO_REFERENCIA: {
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
    await queryInterface.dropTable('PONTOS');
  }
};

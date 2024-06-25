'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PEDIDOS_CADASTRO', {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      NOME_PEDIDO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      SOBRENOME_PEDIDO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      EMAIL_PEDIDO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      TELEFONE_PEDIDO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      FACULDADE_PEDIDO: {
        type: Sequelize.UUID,
        references: {
          model: 'FACULDADES',
          key: 'ID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PEDIDOS_CADASTRO');
  }
};

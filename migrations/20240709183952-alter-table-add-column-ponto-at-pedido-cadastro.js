'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PEDIDOS_CADASTRO', 'PONTO_PEDIDO', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'PONTOS',
        key: 'ID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('PEDIDOS_CADASTRO', 'PONTO_PEDIDO');
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('VEICULOS', 'PONTO_ID');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('VEICULOS', 'PONTO_ID', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'PONTOS',
        key: 'ID'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  }
};

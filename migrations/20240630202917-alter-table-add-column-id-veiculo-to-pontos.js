'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PONTOS', 'VEICULO_ID', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'VEICULOS',
        key: 'ID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('PONTOS', 'VEICULO_ID');
  }
}
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('USUARIOS', 'PONTO_ID', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'PONTOS',
        key: 'ID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('USUARIOS', 'PONTO_ID');
  }
};
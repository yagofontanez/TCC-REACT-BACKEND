'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PONTOS', 'MOTORISTA_ID', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'MOTORISTAS',
        key: 'ID', 
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('PONTOS', 'MOTORISTA_ID');
  }
};

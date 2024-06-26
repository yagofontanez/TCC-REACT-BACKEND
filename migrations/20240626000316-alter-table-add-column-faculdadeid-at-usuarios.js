'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('USUARIOS', 'FACULDADE_ID', {
      type: Sequelize.UUID,
      allowNull: true, 
      references: {
        model: 'FACULDADES',
        key: 'ID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('USUARIOS', 'FACULDADE_ID');
  }
};

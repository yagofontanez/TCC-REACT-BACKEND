'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('USUARIOS', 'FOTO_PERFIL', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('USUARIOS', 'FOTO_PERFIL');
  }
};

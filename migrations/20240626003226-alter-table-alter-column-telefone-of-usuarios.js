'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('USUARIOS', 'TELEFONE', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('USUARIOS', 'TELEFONE', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  }
};

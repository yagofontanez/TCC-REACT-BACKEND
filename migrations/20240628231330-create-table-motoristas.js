'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MOTORISTAS', {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      NOME_MOTORISTA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      SOBRENOME_MOTORISTA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CPF_MOTORISTA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      EMAIL_MOTORISTA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      TELEFONE_MOTORISTA: {
        type: Sequelize.STRING,
        allowNull: false,
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
      PONTO_ID: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'PONTOS',
          key: 'ID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MOTORISTAS');
  }
}
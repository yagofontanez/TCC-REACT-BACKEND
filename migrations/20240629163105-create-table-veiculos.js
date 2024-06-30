'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VEICULOS', {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      TIPO_VEICULO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      NUMERO_VEICULOS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      MARCA_VEICULOS: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MODELO_VEICULOS: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PLACA_VEICULOS: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CAPACIDADE_VEICULOS: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('VEICULOS');
  }
}
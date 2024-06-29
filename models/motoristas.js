"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Motorista extends Model {
    static associate(models) {
      Motorista.belongsTo(models.Ponto, {
        foreignKey: "PONTO_ID",
        as: "ponto",
      });
    }
  }

  Motorista.init({
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    NOME_MOTORISTA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SOBRENOME_MOTORISTA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CPF_MOTORISTA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EMAIL_MOTORISTA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TELEFONE_MOTORISTA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PONTO_ID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'PONTOS',
            key: 'ID',
        }
    },
  }, {
    sequelize,
    modelName: 'Motorista',
    tableName: 'MOTORISTAS',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    paranoid: true,
  });

  return Motorista;
};

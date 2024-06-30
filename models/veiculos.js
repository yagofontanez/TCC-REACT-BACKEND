"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    static associate(models) {
      Veiculo.belongsTo(models.Ponto, {
        foreignKey: "PONTO_ID",
        as: "ponto",
      });
    }
  }

  Veiculo.init({
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    TIPO_VEICULO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NUMERO_VEICULOS: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    MARCA_VEICULOS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MODELO_VEICULOS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PLACA_VEICULOS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CAPACIDADE_VEICULOS: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PONTO_ID: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "PONTOS",
        key: "ID",
      },
    },
  }, {
    sequelize,
    modelName: 'Veiculo',
    tableName: 'VEICULOS',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    paranoid: true
  });

  return Veiculo;
};

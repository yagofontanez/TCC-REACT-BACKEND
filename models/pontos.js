'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ponto extends Model {
    static associate(models) {
      Ponto.hasMany(models.Motorista, {
        foreignKey: 'ID',
        as: 'motorista',
      });
    }
  }

  Ponto.init({
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    NOME_PONTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RUA_PONTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BAIRRO_PONTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CIDADE_PONTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PONTO_REFERENCIA: {
      type: DataTypes.STRING,
    },
    CEP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    MOTORISTA_ID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Ponto',
    tableName: 'PONTOS',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    paranoid: true
  });

  return Ponto;
};

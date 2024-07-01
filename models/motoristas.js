"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Motorista extends Model { }

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

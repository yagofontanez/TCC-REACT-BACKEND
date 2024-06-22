'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {}

  Usuario.init({
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SOBRENOME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    TELEFONE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'USUARIOS',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    paranoid: true
  });

  return Usuario;
};

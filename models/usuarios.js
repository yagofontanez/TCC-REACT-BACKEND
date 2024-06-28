'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.Faculdade, {
        foreignKey: 'FACULDADE_ID',
        as: 'faculdade'
      });
      Usuario.belongsTo(models.Ponto, {
        foreignKey: 'PONTO_ID',
        as: 'ponto'
      });
    }
  }

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
    },
    FACULDADE_ID: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'FACULDADES',
        key: 'ID'
      }
    },
    PONTO_ID: {
     type: DataTypes.UUID,
     allowNull: true,
     references: {
      model: 'PONTOS',
      key: 'ID',
     } 
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

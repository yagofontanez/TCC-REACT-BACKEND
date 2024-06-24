'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Faculdade extends Model {}

    Faculdade.init({
        ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        NOME_FACULDADE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SIGLA_FACULDADE: {
            type: DataTypes.STRING,
        },
        CIDADE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CNPJ: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TELEFONE: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'Faculdade',
        tableName: 'FACULDADES',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt',
        paranoid: true
    });

    return Faculdade;
}
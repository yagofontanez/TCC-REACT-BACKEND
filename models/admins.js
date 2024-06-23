'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Admin extends Model { }

    Admin.init({
        ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        NOME_USUARIO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        SENHA: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Admin',
        tableName: 'ADMINS',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt',
        paranoid: true
    });

    return Admin;
};

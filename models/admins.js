'use-strict';

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
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
        deletedAt: 'deletedAt',
        paranoid: true,
        hooks: {
            beforeCreate: async (admin) => {
                const salt = await bcrypt.genSalt(10);
                admin.SENHA = await bcrypt.hash(admin.SENHA, salt);
            },
            beforeUpdate: async (admin) => {
                if (admin.changed('SENHA')) {
                    const salt = await bcrypt.genSalt(10);
                    admin.SENHA = await bcrypt.hash(admin.SENHA, salt);
                }
            }
        }
    });

    return Admin;
}
'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class PedidoCadastro extends Model { }

    PedidoCadastro.init({
        ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        NOME_PEDIDO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SOBRENOME_PEDIDO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EMAIL_PEDIDO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TELEFONE_PEDIDO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FACULDADE_PEDIDO: {
            type: DataTypes.UUID,
            references: {
                model: 'FACULDADES',
                key: 'ID',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
    }, {
        sequelize,
        modelName: 'PedidoCadastro',
        tableName: 'PEDIDOS_CADASTRO',
        timestamps: true,
        paranoid: true,
    });

    return PedidoCadastro;
};

'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class PedidoCadastro extends Model {
        static associate(models) {
            PedidoCadastro.belongsTo(models.Faculdade, {
                foreignKey: 'FACULDADE_PEDIDO',
                as: 'faculdadePedido'
            });
            PedidoCadastro.belongsTo(models.Ponto, {
                foreignKey: 'PONTO_PEDIDO',
                as: 'ponto'
            });
        }
    }

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
                model: 'Faculdade',
                key: 'ID',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
        PONTO_PEDIDO: {
            type: DataTypes.UUID,
            references: {
                model: 'Ponto',
                key: 'ID',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        }
    }, {
        sequelize,
        modelName: 'PedidoCadastro',
        tableName: 'PEDIDOS_CADASTRO',
        timestamps: true,
        paranoid: true,
    });

    return PedidoCadastro;
};

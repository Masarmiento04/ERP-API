const { DataTypes } = require('sequelize')
const db = require('./index');

const Usuario = db.sequelize.define('Usuario',
    {
        Id_Usuario: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.getDataValue('CodigoUsuario');
            },
            set(value) {
                throw new Error('Do not try to set the `Id_Usuario` value!');
            },
        },
        CodigoUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        Identificacion: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        Login: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        NombreUsuario: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        CargoUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Clave: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        FechaExpiracionClave: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        FechaUltimoCambio: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        Estado: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    },
    {
        tableName: 'Usuario',
        timestamps: false,
        schema: 'dbo',
        freezeTableName: true
    }
);

module.exports = Usuario;
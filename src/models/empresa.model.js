const { DataTypes } = require('sequelize');
const db = require('./index');

const Empresa = db.sequelize.define('Empresa',
    {
        Id_Empresa: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        CodigoEmpresa: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            allowNull: false
        },
        NombreEmpresa: {
            type: DataTypes.STRING,
            allowNull: true
        },
        CodigoPadre: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        CodigoNivel1: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        CodigoNivel2: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        CodigoNivel3: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        CodigoNivel4: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        CodigoNivel5: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        CodigoResponsable: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        Direccion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        CodigoCiudad: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        CodigoGerente: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        NitEmpresa: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        DigitoVerificacion: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        CodigoPerfilTributario: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        CodigoTipoEmpresa: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        EsAutoretenedor: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        EsEmpresa: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        RutaLogo: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        UrlPagina: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Background: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Usuario: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Estado: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        EsFinanciera: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        EsPrincipal: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        EsAutoretenedorICA: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        CuentaAutoretenedorICA: {
            type: DataTypes.BIGINT,
            allowNull: true
        }
    },
    {
        tableName: 'Empresa',
        timestamps: false,
        schema: 'dbo',
        freezeTableName: true
    }
);

module.exports = Empresa;
const { DataTypes } = require('sequelize');
const db = require('./index');
const Empresa = require('./empresa.model');

const Cartera = db.sequelize.define('Cartera', {
    Id_Cartera: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    CodigoDocumento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Empresa: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    Sucursal: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    TipoDocumento: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    NumeroDocumento: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    CodigoTipoCartera: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    CuentaContable: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    Cuota: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    TipoRespaldo: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    NumeroRespaldo: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    Fecha: {
        type: DataTypes.DATE,
        allowNull: true
    },
    FechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    CodigoTercero: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    ValorCuota: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorSaldo: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorFinanciacion: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorDescuento: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorNeto: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorPagado: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    Usuario: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    CodigoZona: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    TipoCartera: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}, {
    tableName: 'Cartera',
    timestamps: false,
    schema: 'dbo', // Especifica el esquema si es necesario
    freezeTableName: true, // Para evitar que Sequelize pluralice el nombre de la tabla
});

// Definir las relaciones
Cartera.belongsTo(Empresa, {
    foreignKey: 'Empresa',
    targetKey: 'CodigoEmpresa'
});

module.exports = Cartera;
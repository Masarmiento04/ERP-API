const { DataTypes } = require('sequelize');
const db = require('./index');
const DocumentoCartera = require('./documentoCartera.model');

const DetalleDocumentoCartera = db.sequelize.define('DetalleDocumentoCartera', {
    Id_DetalleDocumentoCartera: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    Empresa: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Sucursal: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    TipoDocumentoCartera: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    NumeroDocumentoCartera: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    ConteoDocumentoCartera: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    Destino: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    CodigoDocumentoCartera: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    TipoSoporte: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    NumeroSoporte: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    Cuota: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    FechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    ValorAbono: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorDescuento: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorInteres: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorSaldo: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorTotal: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    CodigoTercero: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    CuentaContable: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    CodigoCartera: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    Usuario: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    Estado: {
        type: DataTypes.STRING(1),
        allowNull: true
    },
    Codigo: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ValorIva: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    ValorRetencion: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    PorcentajeIva: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    },
    EmpresaDestino: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    ValorAnticipo: {
        type: DataTypes.DECIMAL(15, 4),
        allowNull: true
    }
}, {
    tableName: 'DetalleDocumentoCartera',
    timestamps: false,
    schema: 'dbo',
    freezeTableName: true
});

// Definir las relaciones

DetalleDocumentoCartera.belongsTo(DocumentoCartera, { foreignKey: ['Empresa', 'Sucursal', 'TipoDocumentoCartera', 'NumeroDocumentoCartera', 'CodigoTercero'] });

module.exports = DetalleDocumentoCartera;
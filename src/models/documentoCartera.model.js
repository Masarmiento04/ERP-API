const { DataTypes } = require('sequelize');
const db = require('./index'); // Ajusta la ruta según tu estructura de proyecto
const Banco = require('./banco.model'); // Ajusta la ruta según sea necesario
const FormaPago = require('./formaPago.model'); // Ajusta la ruta según sea necesario

const DocumentoCartera = db.sequelize.define('DocumentoCartera', {
  Id_DocumentoCartera: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  Empresa: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  Sucursal: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  TipoDocumentoCartera: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NumeroDocumentoCartera: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  EsSistema: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  FechaDocumentoCartera: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  FechaSistema: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  CodigoConceptoCartera: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CodigoTercero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CodigoCobrador: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CodigoBanco: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  NumeroCuenta: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  CodigoFormaPago: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  ValorInicial: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ValorSaldo: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ValorAbono: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ValorInteres: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ValorTotal: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ValorDescuento: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ValorLetras: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CodigoMoneda: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  TasaCambio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ClaseDocumentoRecaudo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Usuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Estado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FechaAnulacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  hora: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  TipoSoporte: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  NumeroSoporte: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  Cuota: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  ValorIva: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ValorRetencion: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  Contabilizado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  CodigoZona: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
}, {
  tableName: 'DocumentoCartera',
  time: 'dbo', // Especifica el esquema si es necesario
  freezeTableName: true, // Para evitar que Sequelize pluralice el nombre de la tabla
});

// Definir relaciones
DocumentoCartera.belongsTo(Banco, { foreignKey: 'CodigoBanco' });
DocumentoCartera.belongsTo(FormaPago, { foreignKey: 'CodigoFormaPago' });

module.exports = DocumentoCartera;
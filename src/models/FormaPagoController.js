const { DataTypes } = require('sequelize');
const db = require('./index'); // Ajusta la ruta según tu estructura de proyecto

const FormaPago = db.sequelize.define('FormaPago', {
  Id_FormaPago: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  CodigoFormaPago: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  NombreFormaPago: {
    type: DataTypes.VIRTUAL, // Este campo es una expresión y no se almacena físicamente
    get() {
      return this.getDataValue('Descripcion');
    },
  },
  Aplica: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EsContado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  PideDocumento: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  EsCheque: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  EsEfectivo: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  TasaInteres: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  TasaPP: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  Usuario: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  Estado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  EsGeneral: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Empresa: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  EsTransferencia: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CodigoTercero: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
}, {
  tableName: 'FormaPago',
  timestamps: false,
  schema: 'dbo', // Especifica el esquema si es necesario
  freezeTableName: true, // Para evitar que Sequelize pluralice el nombre de la tabla
});

module.exports = FormaPago;

const { DataTypes } = require('sequelize');
const db = require('./index'); // Ajusta la ruta según tu estructura de proyecto
const EntidadBancaria = require('./EntidadBancariaModel');

const Banco = db.sequelize.define('Banco', {
  Id_Banco: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Empresa: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  Sucursal: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  CodigoBanco: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  NombreBanco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CodigoBancoCuenta: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  NombreBancoCuenta: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NombreSucursal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NumeroCuenta: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  TipoCuenta: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  ValorSaldo: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ValorSobregiro: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  EsBanco: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CuentaContable: {
    type: DataTypes.BIGINT,
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
  EsExterna: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CodigoTercero: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  Wallet: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'Banco',
  timestamps: false,
  schema: 'dbo', // Especifica el esquema si es necesario
  freezeTableName: true, // Para evitar que Sequelize pluralice el nombre de la tabla
});

// Definir relaciones
Banco.belongsTo(EntidadBancaria, { foreignKey: 'CodigoEntidadBancaria' });

module.exports = Banco;

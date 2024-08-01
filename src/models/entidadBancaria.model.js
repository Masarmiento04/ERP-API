const { DataTypes } = require('sequelize');
const db = require('./index'); // Ajusta la ruta según tu estructura de proyecto

const EntidadBancaria = db.sequelize.define('EntidadBancaria', {
  Id_EntidadBancaria: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  CodigoEntidadBancaria: {
    type: DataTypes.STRING(3),
    allowNull: false,
    unique: true,
  },
  NombreEntidadBancaria: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  CodigoSector: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  CodigoTercero: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  Usuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Estado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  EsBanco: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, {
  tableName: 'EntidadBancaria',
  timestamps: false,
  schema: 'dbo', // Especifica el esquema si es necesario
  freezeTableName: true, // Para evitar que Sequelize pluralice el nombre de la tabla
});

module.exports = EntidadBancaria;

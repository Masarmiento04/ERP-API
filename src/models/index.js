const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.SRV_PORT,
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true,
        },
    },
    define: {
        timestamps: false
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.Banco = require('./banco.model');
// db.Cartera = require('./cartera.model');
// db.DocumentoCartera = require('./documentoCartera.model');
// db.DetalleDocumentoCartera = require('./detalleDocumentoCartera.model');
// db.Empresa = require('./empresa.model');
// db.EntidadBancaria = require('./entidadBancaria.model');
// db.FormaPago = require('./formaPago.model');
// db.Usuario = require('./usuario.model');

module.exports = db;
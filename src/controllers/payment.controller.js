const db = require('../models/index');
const DocumentoCartera = require('../models/documentoCartera.model');
const DetalleDocumentoCartera = require('../models/detalleDocumentoCartera.model');
const sanitizeHtml = require('sanitize-html');

exports.getPayments = async (req, res) => {
    try {
        const recaudos = await DocumentoCartera.findAll({ limit: 15 });
        res.json(recaudos);
    } catch (error) {
        console.error('Error al obtener recaudops: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getPaymentById = async (req, res) => {
    const paymentId = req.params.id;
    try {
        const payment = await DocumentoCartera.findByPk(paymentId);
        if (!payment) {
            return res.status(404).json({ message: 'Recaudo no encontrado' });
        }
        res.json(payment);
    } catch (error) {
        console.error('Error obteniendo el recaudo por el ID: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.createPayment = async () => {
    ///lOGICA
}
const express = require('express');
const paymentController = require('../controllers/payment.controller');

const route = express.Router();

route.get('/payments', paymentController.getPayments);
route.get('/payments/:id', paymentController.getPaymentById);

module.exports = route;
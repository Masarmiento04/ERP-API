const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');

const route = express.Router();

route.get('/login', loginController.getSesion);


module.exports = route;
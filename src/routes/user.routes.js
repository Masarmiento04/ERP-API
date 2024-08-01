const express = require('express');
const { check, validationResult } = require('express-validator');
//const { getUsers, getUserById, createUser, updateUser } = require('../controllers/user.controller');
const uc = require('../controllers/user.controller');

const route = express.Router();

//Creacion de usuario
route.post(
    '/register',
    [
        check('identificacion').notEmpty().withMessage('Identificacion es requerida'),
        check('nombre').notEmpty().withMessage('Nombre es requerida'),
        check('clave').notEmpty().withMessage('Clave es requerida')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }, uc.createUser

);

//Consultar usuarios
route.get('/users', uc.getUsers);

//Consultar usuario por ID
route.get('/user/:id',uc.getUserById);

//Actualizar usuario
route.get('/user/:id', uc.updateUser);

module.exports = route;
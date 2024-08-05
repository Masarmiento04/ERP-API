const db = require('../models/index');
const Usuario = require('../models/usuario.model');
const md5 = require('md5');
const sanitizeHtml = require('sanitize-html');

// Obeten todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const ususario = await db.Usuario.findAll();
        res.json(ususario);
    } catch (error) {
        console.error('Error al obtener usuarios: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        // Id_Usuario, CodigoUsuario, Identificacion, [Login], NombreUsuario, CargoUsuario, Clave, FechaExpiracionClave, FechaUltimoCambio, Estado
        const { identificacion, nombre, cargo, clave, estado } = req.body;

        // Aquí puedes sanear y procesar los datos antes de guardarlos en la base de datos
        const sanitizedIdentificacion = sanitizeHtml(identificacion);
        const sanitizedNombre = sanitizeHtml(nombre);
        const sanitizedCargo = cargo ? sanitizeHtml(cargo) : null;
        const sanitizedClave = sanitizeHtml(clave);
        const sanitizedEstado = estado ? sanitizeHtml(estado) : 1;

        // Encriptar la clave usando md5
        const encryptedClave = md5(sanitizedClave);

        const newUser = await db.Usuario.create({
            CodigoUsuario: sanitizedIdentificacion,
            Identificacion: sanitizedIdentificacion,
            Login: sanitizedIdentificacion,
            NombreUsuario: sanitizedNombre,
            CargoUsuario: sanitizedCargo,
            Clave: encryptedClave,
            FechaExpiracionClave: null,
            FechaUltimoCambio: null,
            Estado: sanitizedEstado
        });

        res.status(201).json({
            message: 'Usuario regintrado con exito',
            user: newUser
        });

    } catch (error) {
        console.error('Eror registrando usuario: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//Obtener usuario por ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await db.Usuario.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error obteniendo usuario por el ID: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//Actualizar un usuario por su ID
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { identificacion, nombre, cargo, clave, fec, fuc, estado } = req.body;

    try {
        const findUser = await db.Usuario.findByPk(userId);
        if (!findUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const sanitizedIdentificacion = sanitizeHtml(identificacion);
        const sanitizedNombre = sanitizeHtml(nombre);
        const sanitizedCargo = sanitizeHtml(cargo);
        const sanitizeClave = sanitizeHtml(clave);
        const sanitizedEstado = sanitizeHtml(estado);
        const fExpira = fec ? fec : null;
        const fCambio = fuc ? fuc : null;

        // Encriptar la clave usando md5
        const encryptedClave = md5(sanitizeClave);

        const updatedRows = await db.Usuario.update(
            {
                Identificacion: sanitizedIdentificacion,
                Nombre: sanitizedNombre,
                CargoUsuario: sanitizedCargo,
                Clave: encryptedClave, // Guarda la clave encriptada
                Estado: sanitizedEstado,
                FechaExpiracionClave: fExpira,
                FechaUltimoCambio: fCambio
            },
            {
                where: {
                    CodigoUsuario: userId
                }
            }
        );

        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: 'User updated' })

    } catch (error) {
        console.error('Error updating user: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//Desactivar usuario
exports.disableUser = async () => {
    const userId = req.params.id;
    const { estado } = req.body;
    try {
        const findUser = await db.Usuario.findByPk(userId);
        if (!findUser) {
            return res.status(404).json({ message: 'Usuario no entcontrado' });
        }

        const disableUser = await db.Usuario.update(
            {
                Estado: estado
            },
            {
                where: {
                    Id_Usuario: userId
                }
            }
        );

        if (disableUser[0] === 0) {
            return res.status(404).json({ message: 'No se pudo deshabilitar el usuario.' });
        }

        res.json({ message: 'Usuario deshabilitado' });

    } catch (error) {
        console.error('Error deshabilitando usuario: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
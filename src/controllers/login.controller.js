const Usuario = require('../models/usuario.model');
const md5 = require('md5');
const sanitizeHtml = require('sanitize-html');

exports.getSesion = async (req, res) => {
    try {

        const { login, clave } = req.body;
        const sanitizeLogin = sanitizeHtml(login);
        const sanitizeClave = sanitizeHtml(clave);

        //console.log(`Usuario: ${sanitizeLogin} y la Clave: ${sanitizeClave}`);

        //Buscar el usuario
        const usuario = await Usuario.findOne(
            {
                where: {
                    Login: sanitizeLogin,
                    Clave: md5(sanitizeClave)
                }
            }
        );

        //En caso de no encontrar el usuario
        if (!usuario) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        //Login exitoso
        res.json({ 
            Message: 'Sesión iniciada',
            Usuario: {
                CodigoUsuario: usuario.CodigoUsuario,
                Identificacion: usuario.Identificacion,
                NombreUsuario: usuario.NombreUsuario,
                CargoUsuario: usuario.CargoUsuario,
                Estado: usuario.Estado
            }
        });

    } catch (error) {
        console.log('Falla en LoginController', error);
        res.status(500).json({ message: 'Falla en LoginController' });
    }
}
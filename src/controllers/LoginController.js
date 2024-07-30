const Usuario = require('../models/UsuarioModel');
const md5 = require('md5');
const sanitizeHtml = require('sanitize-html');

exports.getSesion = async (req, res) => {
    try {

        const { login, clave } = req.body;
        const sanitizeLogin = sanitizeHtml(login);
        const sanitizeClave = sanitizeHtml(clave);

        //Buscar el usuario
        const usuario = await Usuario.findOne(
            {
                where: {
                    Login: sanitizeLogin,
                }
            }
        );

        //En caso de no encontrar el usuario
        if (!usuario) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        
        //Validar la contraseña
        if(md5(sanitizeClave) !== Usuario.clave){
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        //Login exitoso
        res.json({ message: 'Sesión iniciada' });

    } catch (error) {
        console.log('Falla en LoginController', error);
        res.status(500).json({ message: 'Falla en LoginController' });
    }
}
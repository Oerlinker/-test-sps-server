const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');

class AuthController {
    static login(req, res) {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error: 'Datos incompletos'});
        }

        const user = usersModel.findByEmail(email);
        if (!user || user.password !== password) {
            return res.status(401).json({error: 'Email o contraseña incorrectos'});
        }

        const token = jwt.sign({email: user.email, type: user.type}, 'secret', {
            expiresIn: '1h'
        });
        return res.json({token});
    }
}

module.exports = AuthController;
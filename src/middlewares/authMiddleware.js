const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({error: 'Token no proporcionado'});
    }
    const [bearer, token] = authHeader.split(' ');
    if(bearer !== 'Bearer') {
        return res.status(401).json({error: 'Formato de token incorrecto'});
    }
    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({error: 'Token inválido'});
    }
}

module.exports = authMiddleware;
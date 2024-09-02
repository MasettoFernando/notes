const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Extraer el token del header Authorization
    const token = req.headers['authorization']?.split(' ')[1];

    // Verificar si el token está presente
    if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
    }

    // Verificar y decodificar el token
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Adjuntar el usuario decodificado al objeto req
        req.user = decoded;
        next(); // Continuar con el siguiente middleware o ruta
    } catch (error) {
        console.error('Error al verificar el token:', error); // Agregar este log para depuración
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;

// routes/user.routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
// const authMiddleware = require('../Middlewares/authMiddleware');

// Ruta para registrar un nuevo usuario
router.post('/register', userController.registerUser);
// Ruta para iniciar sesión
router.post('/login', userController.loginUser);
// CRUD para usuarios
router.post('/', userController.createUser); // Ya no sería necesario si tienes register
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

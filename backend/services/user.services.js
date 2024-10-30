//services/user.services.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/user.repository.js');

const register = async (username, password) => {
  if (!username || !password) {
    throw new Error('Username and password are required');
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userRepository.createUser(username, hashedPassword);
    // const user = await userRepository.createUser(username, password);
    return user;
  } catch (error) {
    throw new Error('Error al registrar el usuario: ' + error.message);
  }
};

const login = async (username, password) => {
  const user = await userRepository.findUserByUsername(username);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Contraseña incorrecta');
  }

  const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5h' });
  return token;
};

const createUser = async (userData) => {
  return await userRepository.createUser(userData);
};

const getAllUsers = async () => {
  return await userRepository.getAllUsers();
};

const getUserById = async (id) => {
  return await userRepository.getUserById(id);
};

const updateUser = async (id, userData) => {
  return await userRepository.updateUser(id, userData);
};

const deleteUser = async (id) => {
  return await userRepository.deleteUser(id);
};

module.exports = {
  register,
  login,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

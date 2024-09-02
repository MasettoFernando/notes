// repository/user.repository.js

const { User } = require('../models');

const createUser = async ( username, password) => {
  try {
    return await User.create({ username, password });
  } catch (error) {
    throw new Error('Error al crear el usuario: ' + error.message);
  }
};

const findUserByUsername = async (username) => {
  return await User.findOne({ where: { username } });
};

const getAllUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, userData) => {
  return await User.update(userData, {
    where: { id },
  });
};

const deleteUser = async (id) => {
  return await User.destroy({
    where: { id },
  });
};

module.exports = {
  findUserByUsername,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

// /src/repositories/category.repository.js
const { Category } = require('../models');

const getAllCategories = async () => {
  return await Category.findAll();
};

const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

module.exports = {
  getAllCategories,
  getCategoryById,
};

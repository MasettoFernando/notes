// /src/controllers/category.controller.js
const categoryRepository = require('../repository/category.repository');

const getAllCategories = async (req, res) => {
  return await categoryRepository.getAllCategories();
};

const getCategoryById = async (categoryId) => {
    return await categoryRepository.getCategoryById(categoryId);
};

module.exports = {
  getAllCategories,
  getCategoryById,
};

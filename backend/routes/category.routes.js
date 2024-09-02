// /src/routes/category.routes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/category.controller');

router.get('/', categoryController.getAllCategories );
router.get('/:id', categoryController.getCategoryById );

module.exports = router;

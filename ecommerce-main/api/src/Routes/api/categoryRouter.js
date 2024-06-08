const express = require('express');
const {getCategory, addCategory, addCategoryAll} = require('../../Controllers/api/categoryController.js');

const categoryRoute = express.Router();

categoryRoute.get('/', getCategory);

categoryRoute.post('/', addCategory);

categoryRoute.post('/all', addCategoryAll);

module.exports= categoryRoute;

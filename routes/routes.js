const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController.js');
const articleController = require('../controllers/articleController.js');
const { route } = require('express/lib/application');

router.get('/category', categoryController.getAllCategories);
router.get('/category/slug', categoryController.getCategoryBySlug);

router.get('/articles', articleController.getAllArticles);
router.get('/article/id/:id', articleController.getArticleById);
router.get('/article/categoryId', articleController.getArticleBySlug);
router.get('/article/search/', articleController.getArticleByTitle);
router.post('/article/create/', articleController.createArticle);
router.put("/article/update/:id", articleController.updateArticle);



module.exports = router;

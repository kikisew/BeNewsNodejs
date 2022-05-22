const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController.js');
const articleController = require('../controllers/articleController.js');
const { route } = require('express/lib/application');
// const userController = require('../controllers/usersController.js');
// const commentController = require('../controllers/commentController.js');

router.get('/category', categoryController.getAllCategories);
router.get('/category/search/', articleController.getArticleBySlug);
router.get('/category/slug', categoryController.getCategoryBySlug);
router.get('/articles', articleController.getAllArticles);
router.get('/article/id/:id', articleController.getArticleById);
router.get('/article/search/', articleController.getArticleByTitle);
router.post('/article/saved/', articleController.getArticleSaved);
router.post('/article/create/', articleController.createArticle);
router.put("/article/update/:id", articleController.updateArticle);

// //user checklogin
// router.post('/login/', userController.login);
// router.get('/getAllUsers', userController.getAllUsers);
// router.post('/register', userController.register);

// //comments
// router.get('/getAllComments', commentController.getAllComment);
// router.get('/comment/id/:id', articleController.getCommentOfArticle);


//test
// router.get('/category1', categoryController.getAllCategories1);


module.exports = router;

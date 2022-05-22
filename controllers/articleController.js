const articles = require('../models/articles');
const categories = require('../models/categories');

class ArticleController {
  async getAllArticles(req, res, next) {
    try {
      await articles.find({}).then((listArticles) => {
        listArticles.map((article) => article.toObject());
        return res.json([...listArticles]);
      });
    } catch (err) {
      return next(err);
    }
  }

  async getArticleBySlug(req, res, next) {
    try {
      const { id } = req.query;
      await articles.find({category: id}).then((listArticles) => {
          listArticles.map((article) => article.toObject());
          return res.json([...listArticles]);
        });
    } catch (err) {
      return next(err);
    }
  }
  async getArticleById(req, res, next) {
    try {
      const id = req.params.id;
      const article = await articles.findById({ _id: id });
      return res.json(article);
    } catch (err) {
      return next(err);
    }
  }
  async getArticleByTitle(req, res, next) {
    try {
      const { title } = req.query;
      const article = await articles.find({
        title: { $regex: title, $options: 'i' }, // case insensitive string
      });
      return res.json(article);
    } catch (err) {
      return next(err);
    }
  }

  async createArticle(req, res, next) {

    try {
      if (req.body) {
        const {title, content, img, categoryId} = req.body
  
        const addedArticle = new articles({title, content, img,category: categoryId});
        addedArticle.save();
        return res.send("Luu thanh cong")
      }
      return res.send('Không có dữ liệu!');
    } catch (err) {
      console.log("err", err)
      return next(err);
    }
  }
  async updateArticle(req, res, next) {
    try {
      const id = req.params.id;
        const {title, content, img} = req.body
        const result = await articles.findByIdAndUpdate(id,{
        title, content,img
      }, { upsert: true });
        return res.send("Chinh sua thanh cong")
      }
     catch (err) {
      console.log("err", err)
      return next(err);
    }
  }
}
module.exports = new ArticleController();

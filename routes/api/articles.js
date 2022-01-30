const express = require('express');
const router = express.Router();
const Article = require('../../models/Article');
const isAuth = require('../middleware/authMiddleware').isAuth;

// router.get('/:id', isAuth, (req, res) => {
router.get('/:id', (req, res) => {
  Article.findByPk(req.params.id)
    .then(article => res.json(article))
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
})

router.post('/', isAuth, (req, res) => {
  Article.create({
    title: req.body.title,
    content: req.body.content
  }).then(article => res.json({
    status: res.statusCode,
    article: article
  }))
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    })
})

router.get('/', isAuth, (req, res) => {
  Article.findAll({
    order: [['id', 'DESC']]
  })
    .then(articles => res.json({ articles: articles })).catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    })
})

router.put('/:id', isAuth, (req, res, next) => {
  Article.findByPk(req.params.id)
    .then(article => article.update({
      title: req.body.title,
      content: req.body.content
    }))
    .then(article => res.json({article: article }))
    .catch(err => next(err))
})

module.exports = router;
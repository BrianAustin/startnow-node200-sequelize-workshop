const express = require('express');
const router = express.Router();
const db = require('../db/models/index');

router.get('/', (req, res) => {
  db.Blog
  .findAll()
  .then(blogs => {
    res.status(200).json(blogs)
  }).catch(err => res.status(404).send('bad get'));
});

router.get('/featured', (req, res) => {
  db.Blog
    // .where('featured', true)
    .findAll({ where: { featured: true }})
    .then(blogs => {
      res.status(200).json(blogs)
    });
});

router.get('/:id', (req, res) => {
  db.Blog
    .findById(req.params.id)
    .then(blog => {
      if (!blog) res.status(404).send('blog not found');
      res.status(200).json(blog)
    }).catch(err => res.status(404).send('bad id get'));
});

router.post('/', (req, res) => {
  let newBlog = req.body;
  newBlog.authorId = req.query.authorId;
  db.Blog
    .create(newBlog)
    .then(blogs => {
      res.status(201).json(blogs)
    });
});

router.put('/:id', (req, res) => {
  db.Blog
    .update(req.body, {where: { id: req.params.id }})
    .then(author => {
      res.status(204).json(author)
    }).catch(err => res.status(500).send('bad put'));
});

router.delete('/:id', (req, res) => {
  db.Blog
  .destroy({where: { id: req.params.id }})
  .then(blog => {
    res.status(200).json(blog)
  }).catch(err => res.status(404).send('bad delete'));
});

module.exports = router;
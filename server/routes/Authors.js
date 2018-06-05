const express = require('express');
const router = express.Router();
const db = require('../db/models/index');

router.get('/', (req, res) => {
  db.Author
    .findAll()
    .then(authors => { 
      res.status(200).json(authors) 
    }).catch(err => res.status(404).send('bad get'));
});

router.get('/:id', (req, res) => {
  db.Author
    .findById(req.params.id)
    .then(author => {
      if (!author) res.status(404).send('author not found');
      res.status(200).json(author)
    }).catch(err => res.status(404).send('bad id get'));
});

router.get('/:id/blogs', (req, res) => {
  db.Blog
    .findAll({where: { authorId: req.params.id }})
    .then(blogs => {
      res.status(200).json(blogs)
    }).catch(err => res.status(404).send('bad get'));
});

router.post('/', (req, res) => {
  db.Author
    .create(req.body)
    .then(author => {
      res.status(201).json(author)
    }).catch(err => res.status(500).send('bad post'));
});

router.put('/:id', (req, res) => {
  db.Author
    .update(req.body, {where: { id: req.params.id }})
    .then(author => {
      res.status(204).json(author)
    }).catch(err => res.status(500).send('bad put'));
});

router.delete('/:id', (req, res) => {
  db.Author
    .destroy({where: { id: req.params.id }})
    .then(author => {
      res.status(200).json(author)
    }).catch(err => res.status(404).send('bad delete'));
});

module.exports = router;
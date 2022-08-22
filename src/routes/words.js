const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const words = require('../diccionario.json');

router.get('/', (req, res) => {
  res.json(words);
});

router.post('/', (req, res) => {
  const id = words.length + 1;
  const { word, meaning } = req.body;
  const newWord = { ...req.body, id };
  if (word && meaning) {
    words.push(newWord);
    res.json(words);
  } else {
    res.status(500).json({ error: 'Ha ocurrido un error.' });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { word, meaning } = req.body;
  if (word && meaning) {
    _.each(words, (word, i) => {
      if (word.id === id) {
        word.word = word;
        word.meaning = meaning;
      }
    });
    res.json(words);
  } else {
    res.status(500).json({ error: 'Ha ocurrido un error.' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  if (id) {
    _.each(words, (word, i) => {
      if (word.id == id) {
        words.splice(i, 1);
      }
    });
    res.json(words);
  }
});

module.exports = router;

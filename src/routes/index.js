const { Router } = require('express');

const router = new Router();

router.get('/diccionario', (req, res) => {
  const data = {
    diccionario: 'Diccionario',
    word: 'palabras',
  };
  res.json(data);
});

module.exports = router;

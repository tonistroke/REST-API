const { Router } = require('express');

const router = new Router();

router.get('/Estudiante', (req, res) => {
  const data = {
    nombre: 'Antony-Lopez',
    word: '3-743-1884',
  };
  res.json(data);
});

module.exports = router;

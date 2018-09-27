const express = require('express');
const router = express.Router();

router.get('/:lang', function(req, res, next) {
  req.setLocale(req.params.lang);
  res.render('index');
});

module.exports = router;

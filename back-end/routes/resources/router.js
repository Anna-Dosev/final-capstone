const { ensureAuth } = require('../auth/ensureAuth');
const router = require('express').Router();


  router.get('/', ensureAuth, (req, res) => {
    res.send('hello')
  });




module.exports = { router };
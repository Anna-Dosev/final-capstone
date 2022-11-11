const { User } = require('../../models');
const router = require('express').Router();


  router.post('/login', async (req, res) => {
    const { email, password, } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      }
    }); 
    if (user) {
      res.json({email});
    }
  });




module.exports = { router };
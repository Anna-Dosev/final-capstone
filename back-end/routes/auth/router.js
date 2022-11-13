const { User } = require('../../models');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

//creates a token
  const createAuthToken = user => {
    return jwt.sign({user}, 'config.JWT_SECRET', {
        subject: user.email,
        // expiresIn: config.JWT_EXPIRY,
        expiresIn: 18600,
        algorithm: 'HS256'
    });
  };

  router.post('/login', async (req, res) => {
    const { email, password, } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      }
    }); 
    if (user) {
      const token = createAuthToken(user)
      res.json({email, token});
    }
  });




module.exports = { router };
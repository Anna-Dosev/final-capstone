const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { User } = require('./models');

const createAuthToken = user => {
  return jwt.sign({user}, 'config.JWT_SECRET', {
      subject: user.email,
      // expiresIn: config.JWT_EXPIRY,
      expiresIn: 18600,
      algorithm: 'HS256'
  });
};

router.post('/register', async (req, res) => {
    if (await User.findOne({ where: { email: req.body.email } })) {
      res.send({ message: "email in use" });
      return 
    }

    const { firstName, lastName, email, password, newsletter } = req.body;
    console.log(req.body)
    const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        newsletter: newsletter
    }); 
    // if (user) {
    //   res.json({firstName, lastName, email});
    // } 
    const token = createAuthToken(user)
    res.json({email, isSuccess : true, token});
});



module.exports = { router };
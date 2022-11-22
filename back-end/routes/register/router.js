const router = require('express').Router();
const { User } = require('./models');

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
    if (user) {
      res.json({firstName, lastName, email});
    } 
});



module.exports = { router };
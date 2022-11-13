const router = require('express').Router();

router.post('/register', async (req, res) => {
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
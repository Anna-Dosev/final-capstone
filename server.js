require('dotenv').config();
const passport = require('passport');
const express = require('express');
const cors = require('cors');
const { User } = require('./models');
const path = require('path');
const jwt = require('jsonwebtoken');
const server = express();
const { PORT } = process.env.PORT;

const { authRouter, resourcesRouter } = require('./routes');
// const ( regRouter ) = require('./routes');

server.use(cors({ origin: (orig, cb) => cb(null, true), credentials: true }));

//server.use(express.static(path.resolve))
server.use(express.json());
server.use('/auth', authRouter);
server.use('/resources', resourcesRouter);
// server.use('/registrants', regRouter);

server.get('/', (req, res) => {
    res.sendFile('./index.html') //wat dis?
});

server.post('/', (req, res) => {
    //console.log(req.body)
});

server.get('/checkAuth/:id', (req, res) => {
    res.json({"isAuthenticated" : true})
  })  
  

const createAuthToken = user => {
    return jwt.sign({user}, 'config.JWT_SECRET', {
        subject: user.email,
        // expiresIn: config.JWT_EXPIRY,
        expiresIn: 18600,
        algorithm: 'HS256'
    });
  };

server.post('/register', async (req, res) => {
    if (await User.findOne({ where: { email: req.body.email } })) {
        res.send({ message: "email in use" });
        return 
      }

    const { firstName, lastName, email, password, newsletter } = req.body;

    const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        newsletter: newsletter
    }); 
    const token = createAuthToken(user)
    res.json({email, isSuccess : true, token});

    console.log(user)
});


server.listen(PORT, () => {
    console.log('The server is running at port 8080')
});

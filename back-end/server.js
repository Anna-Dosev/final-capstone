const passport = require('passport');
const express = require('express');
const cors = require('cors');
const { User } = require('./models');
const path = require('path');
const server = express();

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
    console.log(user)
    res.send(user);
});


server.listen(8080, () => {
    console.log('The server is running at port 8080')
});

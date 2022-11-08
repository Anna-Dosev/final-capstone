const express = require('express');
const cors = require('cors');
const { User } = require('./models');
const path = require('path');
const server = express();
server.use(cors({ origin: (orig, cb) => cb(null, true), credentials: true }));

//server.use(express.static(path.resolve))
server.use(express.json());

server.get('/', (req, res) => {
    res.sendFile('./index.html') //wat dis?
});

server.post('/', (req, res) => {
    //console.log(req.body)
});

server.get('/checkAuth/:id', (req, res) => {
    res.json({"isAuthenticated" : true})
  })  

server.post('/login', async (req, res) => {
    const { email, password, } = req.body;
    console.log(req.body)
    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      }
    }); 
    console.log(user)
    if (user) {
    //   req.session.user = user;
      res.send(user);
    }
});

server.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, newsletter } = req.body;
    console.log(req.body)
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

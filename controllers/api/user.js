const router = require('express').Router();
const { User } = require('../../models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const withAuth = require('../../utils/auth');

//Get all user data route
/*
router.get('/', (req,res) => {
  User.findAll({
    attributes: {exclude: ['password'] } 
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})*/


//POST add a new router /api/users
router.post('/', (req, res) => {
  
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    // send the user data back to the client as confirmation and save the session
    .then(userData => {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.name = userData.name;
        req.session.loggedIn = true;
    
        res.json(userData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users/login -- login route for a user
router.post('/login',  (req, res) => {
  
  User.findOne({
      where: {
      email: req.body.email
      }
  }).then(userData => {
      
      if (!userData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
      }
      
      const validPassword = userData.checkPassword(req.body.password);
      console.log(validPassword);
      
      if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
      }
      
      req.session.save(() => {
        // declare session variables
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
  
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  });  
});

//Logout route
router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      // 204 status is that a request has succeeded, but client does not need to go to a different page
      
      res.status(204).end();
    });
  } else {
    
    res.status(404).end();
  }
})


module.exports = router;
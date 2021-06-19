const router = require('express').Router();
const { User, Entry } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    //Will get all posts and render all of them onto 'all-posts-public'
});

router.get('/post/:id', async (req, res) => {
    //When they click on a post we render the one they click on onto a new handler bars
    //We will get the info for what they clicked on by reading post from the db which matches req.params.id
});

router.get('/login', async (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/')
    }
    res.render('login');
});

router.get('/signup', async (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/')
    }
    res.render('signup');
});

router.get('/logout', async (req, res) => {
    res.render('login');
});

module.exports = router;
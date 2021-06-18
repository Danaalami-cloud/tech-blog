const router = require('express').Router();
const { User, Entry } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/calandar', withAuth, async (req, res) => {
    res.render('calandar');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/logout', async (req, res) => {
    res.render('login');
});


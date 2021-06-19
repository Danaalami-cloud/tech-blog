const router = require('express').Router();
const { Comment } = require('../../models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const withAuth = require('../../utils/auth');

// The only endpoint needed in here is a router.post which creates a new comment
router.post('/', withAuth, async (req,res) => {
    Comment.create({
        ...req.body,
        userId: req.session.userId
    })/then((comment) => {
        res.json(comment)
    })
})

module.exports = router;
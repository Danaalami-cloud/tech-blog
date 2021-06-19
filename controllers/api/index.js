const router = require('express').Router();
const userRoutes = require('./user');
//Only thing missing in here is requiring in the other routes (post/comment) and 'using' them
router.use('/users', userRoutes);

module.exports = router;
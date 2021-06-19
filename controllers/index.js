const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);


//add the dashboard router
module.exports = router;
const router = require('express').Router();
const userRoutes = require('./user');
//const postRoutes = require('./posts');
//const videoRoutes = require('./video');

// Post routes
//router.use('/posts', postRoutes);
router.use('/user', userRoutes);
//router.use('/video', videoRoutes);

module.exports = router;

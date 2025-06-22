const express = require('express');
const authRoute = require('./v1/user-route');
const topicRoute = require('./v1/topic-route');
const router = express.Router();

router.use('/v1', authRoute);
router.use('/v1',topicRoute);

module.exports = router;
const {TopicController}=require('../../controllers');
const express = require('express');
const { UserMiddleware } = require('../../middlewares');
const router = express.Router();

router.get('/topics',UserMiddleware.checkAuth, TopicController.getTopics);


module.exports=router;


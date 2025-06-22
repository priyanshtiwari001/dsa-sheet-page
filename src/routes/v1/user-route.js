const express = require('express');
const {UserController} = require('../../controllers')
const {UserMiddleware} = require('../../middlewares')
const router = express.Router();


router.post('/auth/signup', UserMiddleware.validateUser ,UserController.signUp);

router.post('/auth/signin', UserController.signin);

router.get('/auth/validate',UserMiddleware.checkAuth, function ex(req,res){
    return res.send( {data : req.user});
})

module.exports = router;




const {TopicService} = require('../services');
const {StatusCodes} = require('http-status-codes')
const {SuccessResponse,ErrorResponse} = require('../utils/common');


 function getTopics(req,res){
    try {
        const response =  TopicService;
       SuccessResponse.data=response;
       return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
    } catch (error) {
       ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports={getTopics};
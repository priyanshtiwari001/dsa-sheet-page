const mongoose = require('mongoose');
const {URL} = require('../config/server-config')


async function connectDB(){
    try {
        const connect = await mongoose.connect(`${URL}/auth_topic`);
        return connect;
    } catch (error) {
        console.log(error);
    }

}

module.exports=connectDB;

// JFEplWnEOG2imsFb
// priyanshu108tiwari
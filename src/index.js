const express = require('express');
const cors = require('cors');
const {rateLimit} = require('express-rate-limit');
const v1Route = require('./routes')
const {ConnectDB} = require('./config');
const {ServerConfig} = require('./config');


const msg = "Too many request! Please try afte sometime!";
const limiter = rateLimit({
    windowMs:2*60*1000, // 2 mins
    limit:100, // 5 request per IP addess
    message:JSON.stringify(msg)
   
})

const app = express();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(limiter);

app.use('/api',v1Route);


app.listen(ServerConfig.PORT, async ()=>{
    console.log(`Port is successfully running in ${ServerConfig.PORT}`);
    await ConnectDB();
    console.log("DB Connected");

})



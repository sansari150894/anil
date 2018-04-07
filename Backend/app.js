const express = require('express');
const app = express();
const sigeupRoute = require('./api/routes/signup');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//mongoose.connect('mongodb+srv://randomansari:android@2.4mongoatlas@randomansari-6pqma.mongodb.net/test');
mongoose.connect('mongodb://randomansari:randomansari@randomansari-shard-00-00-6pqma.mongodb.net:27017,randomansari-shard-00-01-6pqma.mongodb.net:27017,randomansari-shard-00-02-6pqma.mongodb.net:27017/test?ssl=true&replicaSet=RandomAnsari-shard-0&authSource=admin');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/signup',sigeupRoute);
app.use((req,res,next)=>{
  res.status(200).json({
    message: "It works"
  })
});

module.exports = app;

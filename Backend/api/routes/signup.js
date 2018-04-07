const express = require('express');
const router = express.Router();
const Signup = require('../models/Signup');
const mongoose = require('mongoose');

router.post('/',(req, res, next)=>{
  const signup = new Signup({
    _id : mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone:req.body.phone,
    password:req.body.password
  });
  signup.save().then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  });
  res.status(200).json({
    message : "handling signup req /signup",
    createdUser : signup
  });
});

module.exports = router;

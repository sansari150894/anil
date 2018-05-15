const express = require('express');
const router = express.Router();
const Signup = require('../models/Signup');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

router.post('/',(req, res, next)=>{
  Signup.find({email:req.body.email}).then((user)=>{
    if(user >= 1){
      res.status(409).json({
        message: 'user already exist'
      });
    }
    else{
      bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
          return res.status(500).json({
            message:"something went wrong..."
          });
        }
        else{
          const signup = new Signup({
            _id : mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            phone:req.body.phone,
            password:hash
          });
          signup.save().then((result)=>{
            console.log(result);
            res.status(200).json({
              message: 'user created successfully..'
            });
          }).catch((err)=>{
            console.log(err);
          });
        }
      });
    }
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Signup = require('../models/Signup');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

router.post('/',(req, res, next)=>{
  console.log('login');
  Signup.find({email : req.body.email})
  .then((user)=>{
    console.log(user);
    if(user.lenght<1){
      return res.status(401).json({
        message: 'auth failed'
      })
    }
    bcrypt.compare(req.body.password, user[0].password ,(err, result)=>{
      if(err){
        return res.status(401).json({
          message: 'auth failed'
        });
      }
      if(result){
        return res.status(200).json({
          message: 'auth successfully'
        });
      }
      res.status(401).json({
        message: 'auth failed'
      });
    })
  });
});

module.exports = router;

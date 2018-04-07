const mongoose = require('mongoose');

const SignupSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : String,
  email : String,
  phone : String,
  password : String
});

module.exports = mongoose.model('Signup',SignupSchema);

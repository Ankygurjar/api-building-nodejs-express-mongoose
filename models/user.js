const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  name:{ type:String,required:true,minlength:5,maxlength:30 },
  email:{ type:String,required:true,minlength:5,maxlength:100 },
  password:{ type:String,required:true,minlength:5,maxlength:100 }
}));

function validateUser(user){
  const schema = {
    name : Joi.string().min(5).max(50).required(),
    email : Joi.string().min(5).max(100).required().email(),
    password: Joi.string().min(5).max(100).required()
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;

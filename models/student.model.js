const mongoose=require('mongoose');

var studentScheme=new mongoose.Schema({
    Name:{type:String},
    Fname:{type:String},
    Email:{type:String},
    Password:{type:String},
    Mobile:{type:String}
});

var Student1=mongoose.model('Student1',studentScheme);
// console.log('chala');
module.exports=Student1;

const mongoose = require("mongoose");
var studentScema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    }
})
var data = mongoose.model('data', studentScema);
module.exports = data
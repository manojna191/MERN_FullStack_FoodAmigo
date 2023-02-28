const mongoose = require('mongoose')

const valueschema = new mongoose.Schema({
    temparature:{
        type: String,
        required: true
    },
    humidity:{
        type: String,
        required: true
    },
    methane:{
        type: String,
        required: true
    },
    timestamp:{
        type:String,
        required:true,
        unique: true
    },
    sensorId:{
        type:String,
        required:true
    },
    daysLeft:{
        type:Number,
        required: true
    },
    rottenLevel:{
        type:Number,
        required: true
    }
},{timestamps: true})

const Value = mongoose.model('Value', valueschema)
module.exports = Value
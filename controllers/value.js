const Value = require("../models/value")
const {createError} = require('../error')

exports.postValue = async(req,res,next)=>{
    try{
        const value = new Value(req.body);
        await value.save();
        res.status(200).json({"message": "saved"})
    }catch(err){
        console.log(err)
        next(err)
    }
}

exports.getValue = async(req,res,next)=>{
    try{
        console.log("hey")
        const value = await Value.find().sort({ createdAt: -1 }).limit(1)
        if(!value){
            return next(createError(404, "No video"))
        }
        res.status(200).send(value)
    }catch(err){
        next(err)
    }
}
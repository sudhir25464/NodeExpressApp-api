const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
    type:Number,
    required:true
    },
    work:{
        type:String,
        enum:['manager', 'employee','labour'],
        required:true
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    address:{
        type:String,
        
    },
    salary:{
        type:Number,
        required:true,
    }
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;

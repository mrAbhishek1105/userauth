import mongoose, { Schema } from "mongoose";

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        minlength:8
    }
})

const User = mongoose.model("user", userschema)

export default User;
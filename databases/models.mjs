import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    title : String,
    savings : String,
    date : String
} ,{ _id : false});

export const Client = function () {
    const  Schema = new mongoose.Schema ({
        username : String,
        history : [historySchema],
        savings : String
    } , {timestamps : true});
    return mongoose.model('Client' ,  Schema);
};

export const Admin = function () {
    const Schema = new mongoose.Schema({
        username : String,
        password : String,
        unixcode : String,
        history : Array,
    } , {timestamps : true});
    return mongoose.model('Admin' , Schema);
};
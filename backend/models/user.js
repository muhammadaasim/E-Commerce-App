const mongoose=require ('mongoose');

const users=mongoose.Schema({
    fullname: String,
    gender:String,
    username:String,
    password:String,
    email:String
})

module.exports.Users = mongoose.model("users", users);

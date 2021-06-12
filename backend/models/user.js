const mongoose=require ('mongoose');

const users=mongoose.Schema({
    fullname: String,
    gender:String,
    username:String,
    password:String
})

module.exports = mongoose.model("users", schema);

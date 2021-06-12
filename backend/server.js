const express=require("express");
const server=express();
require('./db/config');

server.use(express.json())
server.use(express.urlencoded({extended:true}))

const {User}=require('./routes/user')
server.use('/user',User)
server.listen(4000,()=>{console.log('server started at port 4000')});
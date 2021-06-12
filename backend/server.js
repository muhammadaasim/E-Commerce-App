const express=require("express");
const server=express();
require('./db/config');


server.get('/',(req,res)=>{ res.send("Hello")})

server.listen(4000,()=>{console.log('server started at port 4000')});
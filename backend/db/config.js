var mongoose = require('mongoose');

function DBConfig(){
    var mongoDB = 'mongodb://127.0.0.1/e-comm';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("error",()=>console.log("Mongoose Error"))
mongoose.connection.once('open',()=>console.log("Database connected successfully..."))
}

DBConfig()
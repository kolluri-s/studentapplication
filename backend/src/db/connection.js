const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
   // useCreateIndex : true,
   // useNewUrlParse : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("connection failed!",err);
})
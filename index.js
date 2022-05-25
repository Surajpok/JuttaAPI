const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config({path:'./config/config.env'});

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("DBConnection Succesful"))
.catch((err) => {
    console.log(err);
});




app.listen( process.env.PORT || 3000, () =>{
    console.log("backend server running");
})
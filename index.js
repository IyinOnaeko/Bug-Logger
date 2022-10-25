const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require("dotenv").config();


//set up express app
const app = express();
app.use(bodyParser.json());
// connect to mongoDB

mongoose.connect(process.env.URL)
mongoose.Promise = global.Promise;


//initialize routes
app.use("/api", require("./routes/api"));



//listen for requests
app.listen(process.env.PORT || 4000, function(){
    console.log("listening on port 4000");
});



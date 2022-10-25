const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require("dotenv").config();


//set up express app
const app = express();
// connect to mongoDB
mongoose.connect(process.env.URL)
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

//error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message})
})
//initialize routes
app.use("/api", require("./routes/api"));



//listen for requests
app.listen(process.env.PORT || 4000, function(){
    console.log("listening on port 4000");
});



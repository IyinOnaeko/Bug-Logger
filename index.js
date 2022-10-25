const express = require("express");
const bodyParser = require("body-parser");



//set up express app
const app = express();
app.use(bodyParser.json());
//initialize routes
app.use("/api", require("./routes/api"));



//listen for requests
app.listen(process.env.PORT || 4000, function(){
    console.log("listening on port 4000");
});


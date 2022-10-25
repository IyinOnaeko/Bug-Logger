const express = require("express");
const router = express.Router();

///route-setup



//get a list of bugs from the database
router.get("/bugs", function (req, res) {
    res.send({ type: "GET" });
});


//add a new bug to the database

router.post("/bugs", function (req, res) {
    console.log(req.body);
    res.send({
        type: "POST",
        name: req.body.name,
        class: req.body.class

    });
});


//update a bug in the database 
router.put("/bugs/:id", function (req, res) {
    res.send({ type: "PUT" });
});

//delete a bug in the database
router.delete("/bugs/:id", function (req, res) {
    res.send({ type: "DELETE" });
});


module.exports = router;
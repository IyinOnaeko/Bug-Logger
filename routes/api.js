const express = require("express");
const router = express.Router();
const Bug = require("../models/bugs");

///route-setup



////get a list of bugs from the database////
router.get("/bugs",  async function (req, res, next) {
    // res.send({ type: "GET" });
        const bugs = await Bug.find();
        res.json(bugs);
    });


//add a new bug to the database

router.post("/bugs", function (req, res, next) {
    Bug.create(req.body).then(function (bug) {
        res.send(bug);
    }).catch(next);

});


//update a bug in the database 
router.put("/bugs/:id", function (req, res, next) {
    // res.send({ type: "PUT" })
    Bug.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Bug.findOne({ _id: req.params.id }).then(function (bug) {
            res.send(bug);
        })
    });
});
    //delete a bug in the database
router.delete("/bugs/:id", function (req, res, next) {
        // res.send({ type: "DELETE" });
        Bug.findByIdAndRemove({ _id: req.params.id }).then(function (bug) {
            res.send(bug);
        });
    });


    module.exports = router;
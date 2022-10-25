const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create bug Schema and model

const bugSchema = new Schema({
    sprint: {
        type: Number,
        required: [true, 'sprint field is required']
    },
    bugName : {
        type: String,
        required : [true, "enter bug name"]
    },
    Reporter : {
     type : String,
     required : [true, "reporter field is required, could be Dev/QA/CS"]
    },
    Status: {
        type: String,
        required: [true, "bug status is required, could be New/Open/Active"]
    },

    Priority: {
        type : Boolean,
        default: false
    }
//add in sprint number
});



const Bug = mongoose.model('bug', bugSchema);


module.exports = Bug;
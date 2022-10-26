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
    reporter : {
     type : String,
     required : [true, "reporter field is required, could be Dev/QA/CS"]
    },
    status: {
        type: String,
        required: [true, "bug status is required, could be New/Open/Active"]
    },

    priority: {
        type : Boolean,
        default: false
    },

    timestamp : {
        type: String,
        default : Date.now()
    }
//add in sprint number
});

const Bug = mongoose.model('bug', bugSchema);


module.exports = Bug;
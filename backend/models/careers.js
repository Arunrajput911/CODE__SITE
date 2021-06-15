const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    workType:{
        type:String,
        required:true
    },
    remote:{
        type:Boolean,
        required:true,
        default:false
    },
    duration:{
        type:String,
        required:true
    },
    stipend:{
        type:Number,
        required:true
    },
    applyBy:{
        type :Date,
        required:true
    },
    startedBy:{
        type:Date,
        required:true
    },
    appliedOn:{
        type:Date,
        required:true
    },
    skills:{
        type:[String],
        required:true
    },
    jobDiscription:{
        type:String,
        required:true
    },
    whoCanApply:{
        type:String,
        required:true
    },
    totalOpening:{
        type:Number,
        required:true
    },
    perks:{
        type:[String],
        required:true
    }
});

const Jobs = mongoose.model("Jobs",jobSchema);

module.exports = Jobs ;
const mongoose = require("mongoose");

const Schema  = mongoose.Schema;
const studentSchema = new Schema({

    name : {
        type : String,
        require : true //validation checking the name field is filled
    },

    age : {
        type : Number,
        require : true
    },

    gender : {
        type : String,
        require : true
    }

})//Making the schema to student object with attributes

const Student = mongoose.model("Student", studentSchema);//pass the student to the database

module.exports = Student;//export the student module
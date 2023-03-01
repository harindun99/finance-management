const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    empid : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender: {
        type : String,
        required: true
    },
    phone: {
        type : String,
        required: true
    },
    position: {
        type : String,
        required: true
    },
    salary: {
        type : String,
        required: true
    }
})

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;
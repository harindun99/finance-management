const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assetSchema = new Schema({
        
    codeno : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    value: {
        type : String,
        required: true
    }
    
})

const Asset = mongoose.model("Asset",assetSchema);

module.exports = Asset;
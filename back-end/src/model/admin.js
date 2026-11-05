const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    capacity : {
        type : Number,
        required : true
    } 
});
const adminModel = mongoose.model("adminModel", AdminSchema);

module.exports = adminModel;
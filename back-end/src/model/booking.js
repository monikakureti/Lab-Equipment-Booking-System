const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userModel",
        required : true
    },
    name : {
        type : String,
        required : true
    },
    product : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        enum : ["pending", "active", "closed"],
        default : "pending"
    }
});
const bookingModel = mongoose.model("bookingModel", bookingSchema);

module.exports = bookingModel;
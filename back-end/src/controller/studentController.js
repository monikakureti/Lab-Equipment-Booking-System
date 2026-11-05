const adminModel = require("../model/admin");
const bookingModel = require("../model/booking");


exports.viewProducts = async (req, res)=>{
    const data = await adminModel.find();
    if(!data){
        return res.status(404).json({message : "No Products are available"});
    }
    res.json(data);
} 

exports.bookProduct = async (req, res)=>{
    const {date} = req.body;
    const {id} = req.params;
    const findProduct = await adminModel.findById(id);
     if(!findProduct){
        return res.status(404).json({message : "Product not found"});
    }
    const bookingData = await bookingModel.create({
        user : req.user._id,
        name : req.user.name,
        product : findProduct.name,
        date : date
    });

    res.status(201).json({message : "Product booked successfully", data : bookingData});
}

exports.myBookings = async (req, res)=>{
    const bookings = await bookingModel.find({user : req.user._id});
    if(!bookings){
        return res.json({message : "No bookings found"});
    }
    res.json(bookings);
}


exports.deleteOrder = async (req, res)=>{
    const {id} = req.params;
    const order = await bookingModel.findByIdAndDelete(id);
    if (!order) {
        return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({message : "Order deleted"});
}
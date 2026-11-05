const adminModel = require("../model/admin");
const bookingModel = require("../model/booking");

exports.addProduct = async (req, res)=>{
    const {name, capacity} = req.body;
    const find = await adminModel.findOne({name});
    if(find){
        return res.json({message : "this product is already available"});
    }
    const data = await adminModel.create(req.body);
    res.status(201).json({message : "Product added to cart", data : data});
}

exports.displayBookings = async (req, res)=>{
    const bookings = await bookingModel.find();
    if(!bookings){
        return res.status(404).json({message: "No bookings"})
    }
    res.json(bookings);
}

exports.changeStatus = async (req, res)=>{
    const {status} = req.body;
    const {id} = req.params;
    const order = await bookingModel.findByIdAndUpdate(id, {status : status}, {new : true});
    if(!order){
        return res.status(404).json("no booking found");
    }
    res.json({order});
}
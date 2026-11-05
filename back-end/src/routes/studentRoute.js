const express = require("express");
const {viewProducts, bookProduct, myBookings, deleteOrder } = require("../controller/studentController");
const { verifyUser } = require("../middleware/middleware");

const route = express.Router();

route.get("/products", verifyUser, viewProducts);
route.post("/book/:id", verifyUser, bookProduct);
route.get("/my-orders", verifyUser, myBookings);
route.delete("/delete/:id", verifyUser, deleteOrder);

module.exports = route;
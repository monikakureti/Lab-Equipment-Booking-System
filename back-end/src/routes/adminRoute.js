const express = require("express");
const { addProduct, displayBookings, changeStatus } = require("../controller/adminController");
const { verifyUser, verifyRole } = require("../middleware/middleware");

const route = express.Router();

route.post("/add", verifyUser, verifyRole, addProduct);
route.get("/orders", verifyUser, verifyRole, displayBookings);
route.patch("/orders/:id/status", verifyUser, verifyRole, changeStatus);

module.exports = route;
const express = require("express");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const studentRoute = require("./routes/studentRoute");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/student", studentRoute);

module.exports = app;
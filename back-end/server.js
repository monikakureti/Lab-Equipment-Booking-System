const app = require("./src/app");
const ConnectDB = require("./src/config/db");
require("dotenv").config();

ConnectDB();
try{
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    })
}catch(err){
    console.log("Server is not running");
    console.log("Error : ", err);
}
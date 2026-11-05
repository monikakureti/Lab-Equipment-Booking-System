const mongoose = require("mongoose");
const dns = require("node:dns");

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

async function ConnectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB is connected");
    }catch(err){
        console.log("MongoDB is not connected");
        console.log("Error : ", err);
    }
}
module.exports = ConnectDB;
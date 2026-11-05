const jwt = require("jsonwebtoken");
const userModel = require("../model/user");

exports.verifyUser= async (req, res, next)=>{
    const head = req.headers.authorization;

    if(!head){
        return res.status(401).json({message : "No token is provided"});
    }

    const token = head.split(" ")[1];

    const verify = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(verify.id);

    if(!verify){
        return res.status(404).json({message : "user not found"});
    }

    req.user = user;

    next();
}

exports.verifyRole = async (req, res, next)=>{
    if(req.user.role != "Admin"){
        return res.status(403).json({message : "Access denied. Admins only"});
    }
    next();
}
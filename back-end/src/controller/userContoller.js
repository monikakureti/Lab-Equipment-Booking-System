const userModel = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res)=>{
    const {name, email, password, role} = req.body;

    const findEmail = await userModel.findOne({email});
    if(findEmail){
        return res.status(400).json({message : "Email already exists"});
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const userData = await userModel.create({
        name : name,
        email : email,
        password : hashPassword,
        role : role
    });
    if(!userData){
        return res.json({message : "no data is stored"});
    } 
    res.status(201).json({
        message : "user registered successfuly"
    });
    console.log(userData);
}

exports.login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(404).json({message : "user not found"});
    }

    // const hashed = await bcrypt.hash(password, 12);
    const same = await bcrypt.compare(password, user.password);
    if(!same){
        return res.status(404).json({message : "Invalid password"});
    }
    const token = jwt.sign({ id : user._id }, process.env.JWT_SECRET, { expiresIn : '1d' });
    res.status(200).json({message : "Login Successfully",token : token, data : {
        id : user._id,
        name : user.name,
        email : user.email,
        role : user.role
    }
    });

}
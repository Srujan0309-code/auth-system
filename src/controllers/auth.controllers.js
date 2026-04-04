const usermodel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function register(req, res) {

    const { username, email, password } = req.body;

    const user = await usermodel.create({
        username,
        email,
        password
    });
    const useralreadyexists = await usermodel.findOne({ email });
    if(useralreadyexists){
        return res.status(409).json({ "message": "User already exists" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    
    res.cookie('token', token);

    res.status(201).json({ 
        "message": "User registered successfully",
        user });
}


module.exports = {
    register
};

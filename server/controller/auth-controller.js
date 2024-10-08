const User = require("../models/user-auth");

const index = async (req, res) => {
    res.status(200).send("Welcome through Controller");
}

const register = async (req, res) => {
    try {
        // console.log(req.body);

        const {username, email, phone, password} = req.body;
        const emailCheck = await User.findOne({ email });

        if (emailCheck) {
            return res.status(500).json({
                message: "This Email is already registered"
            })
        }
        const user_create = await User.create({
            username,
            email,
            phone,
            password
        });
        console.log(req.body);
        
        return res.status(200).json({
            message: "User registered successfully",
            user: user_create
        })

        // res.status(200).json({
        //     message: "Welcome the Controller",
        //     content: req.body
        // });
        
        // res.status(200).send("Welcome to Controller");
    } catch (error) {
        return res.status(404).json({
            msg: "Couldn't register"
        })
    }
}






module.exports = {index, register}

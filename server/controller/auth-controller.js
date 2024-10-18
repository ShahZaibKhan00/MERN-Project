const bycrpt = require("bcryptjs")
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
            token: await user_create.generateToken(),
            userId: user_create._id.toString()
        })
    } catch (error) {
        return res.status(404).json({
            msg: "Couldn't register"
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usercheck = await User.findOne({ email });

        if (!usercheck) {
            return res.status(500).json({
                "message": "Invalid email address"
            })
        } else {
            // const userpassword = await bycrpt.compare(password, usercheck.password)
            const userpassword = await usercheck.comparePassword(password)

            if (userpassword) {
                return res.status(200).json({
                    "message": "Login successfuly",
                    "token": await usercheck.generateToken(),
                    "userId": usercheck._id.toString(),
                    "password": usercheck.password
                })
            }
            else 
                return res.status(500).json({
                    "message": "Invalid password"
                })
        }

    } catch (error) {
        console.error(error);
    }
}






module.exports = { index, register, login }

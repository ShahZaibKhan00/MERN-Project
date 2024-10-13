const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
            // column name Brackets me us ki properties jesy k string number ya 
                //boolean ya kuch bhi jesa laravel me hota ha column k name k bad
    username: {             
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id,
            username: this.username,
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d"
        }
    )
    } catch (error) {
        console.error(error);
    }
}

userSchema.pre("save", async function (next) {
    const user = this

    if (!user.isModified()) {
        next();
    }

    try {
        const salt_round = await bcrypt.genSalt(12);
        const hash_password = await bcrypt.hash(user.password, salt_round)
        user.password = hash_password;
    } catch (error) {
        next(error);
    }

})

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

const User = new mongoose.model("User", userSchema);

module.exports = User;
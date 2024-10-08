const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
            // column name Brackets me us ki properties jesy k string number ya 
                //boolean ya kuch bhi jesa laravel me hota ha column k name k bad
    username: {             
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


const User = new mongoose.model("User", userSchema);

module.exports = User;
const { z } = require("zod")

const signupSchema = z.object({
    username: z.string({ required_error:"Username field is required."})
        .trim().min(3, {message: "Username field must 3 characters"}).max(255, {message: "Username field must 255 characters"}),

    email: z.string({ required_error:"Email field is required" }).trim().email({message: "Invalid Emial Address"}),
    
    phone: z.string({message: "Phone Number is reqeuired" }).trim()
        .min(11, {message: "Number must be at least 11 characters"}).max(13, {message: "NUmber must be at least 13 characters"}),

    password: z.string({required_error:"Password field is required" }).min(3, {message: "Password field must 3 characters"})
})

module.exports = signupSchema; 

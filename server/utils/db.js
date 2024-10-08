const { default: mongoose } = require('mongoose')

// const URI = "mongodb://localhost:27017/mern_db"
const URI = process.env.MONGODB_URI + "mern_db"

const conneectDB = async () => {
    try {
        await mongoose.connect(URI
            // , { useNewUrlParser: true, useUnifiedTopology: true }   IDK ya kia ha
        )
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
        process.exit(0)
    }
}

module.exports = conneectDB

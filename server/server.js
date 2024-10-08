require("dotenv").config();
const express = require("express")
const app = express();

const route = require("./routes/auth-router");
const conneectDB = require("./utils/db")


app.use(express.json());

app.use('/api/auth', route);


// app.get("/", (req, res) => {
//     res.status(200).send("Welcome");
// });

// app.get("/login", (req, res) => {
//     res.status(200).send("Welcome Login");;
// });

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome");
// });


// Serve Port and starting with npm run start
const PORT = 80;

conneectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    });
}).catch((err) => {
    
});

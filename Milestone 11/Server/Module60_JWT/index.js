const express = require('express');
const jwt = require('jsonwebtoken');
var cors = require('cors')
const app = express()
const cookieParser = require("cookie-parser");
const port = 3000

app.use(cors({
    origin: "http://localhost:5173",  // ✅ replace with your frontend's actual URL
    credentials: true                 // ✅ allows cookies
}));
app.use(express.json());
// app.use(cookieParser());

app.get("/", async(req, res) => {
    res.send("hello world")
})

app.post("/jwt", async(req, res) => {

    const {email} = req.body;
    const user = {email}
    const token = jwt.sign(user, "secret", {expiresIn: "1h"});
  
    // set the cookies 
    res.cookie("token", token, {
        httpOnly: true, 
        secure: false,
    })

    res.send(token);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
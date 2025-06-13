const express = require('express');
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser()); // to get cookie in the backend 


// sending JWT token 
app.post("/", async(req, res) => {
    const userInfo = req.body;
    const token = jwt.sign(userInfo, "secret", {expiresIn: "1h"});
    
    // save to ccokies 
    res.cookie("token", token, {
        httpOnly: true, 
        secure: false,
    })
    
    // sending to client 
    res.send(token);
})

app.get("/", async(req, res) => {
    console.log("Inside App API", req.cookies);
    res.send("cookies Displayed in server")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

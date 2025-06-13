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


// custon middleware 
const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token
    console.log("cookie in the middleware", req.cookies)
    if(!token) {
        return res.send("unauthorized Access denied");
    } 

    // jwt verification 
    jwt.verify(token, "secret", (err, decoded) => {
        if(err) {
            return res.send("Expired bullshit!")
        }
        console.log(decoded);
        req.decoded = decoded;
    });

    next();
}

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

// seeing token in the backend 
app.get("/", async(req, res) => {
    console.log("Inside App API", req.cookies);
    res.send("cookies Displayed in server")
})

// verifying token 
app.post("/verify", verifyToken, async(req, res) => {
    const userInfo = req.body

    console.log(userInfo, req.decoded, "siu");

    if(userInfo.name !== req.decoded.name) {
        res.send("Thief Intruder");
    }
    res.send("Hello world");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const users = [
    {
        email: "elon@gmail.com",
        company: "Tesla"
    },
    {
        email: "elon@gmail.com",
        company: "SpaceX"
    },
    {
        email: "amy@yahoo.com",
        company: "Netflix"
    },
    {
        email: "bob@outlook.com",
        company: "Amazon"
    }
  ];

// got from firebase  
var admin = require("firebase-admin");

var serviceAccount = require("./PrivateKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
  

async function verifyingFirebaseToken(req, res, next) {
    const authHeader = req.headers?.authorization;
    // console.log(authHeader);

    if(!authHeader || !authHeader.startsWith("Bearer")) {
        // console.log(authHeader.startsWith("Bearer"))
        return res.status(401).send({message: "Unauthorized Access"});
    }

    const splittedAuthHeader = authHeader.split(" ");
    const token = splittedAuthHeader[1]
    

    try {
        const decoded = await admin.auth().verifyIdToken(token);
        // console.log(decoded.email); // will get email from here for next verfication
        req.decoded = decoded
        next()
    }
    catch(erro) {
        console.log("Hello world")
        return res.status(401).send({message: "Unauthorized Access"})
    }
    
}

app.get("/my-applications", verifyingFirebaseToken, (req, res) => {
    const email = req.query.email;
    console.log(req.decoded.email);

    if(email !== req.decoded.email) {
        return res.status(403).send({ message: "Forbidden Access" })
    }

    let applications = users.filter((singleUser) => singleUser.email === email);
    res.send(applications)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

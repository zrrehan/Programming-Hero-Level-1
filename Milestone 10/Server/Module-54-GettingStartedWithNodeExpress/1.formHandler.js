const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

let data = [
    { id: 1, name: "bruce", email: "bruce@gmail.com" },
    { id: 2, name: "tony", email: "tony@gmail.com" },
    { id: 3, name: "geralt", email: "geralt@gmail.com" }
] 

app.get("/", (req, res) => {
    res.send(data)
});

app.post("/", (req, res) => {
    console.log("Something Posted");
    console.log(req.body);
    data.push({
        id: data.length + 1, 
        name: req.body.name,
        email: req.body.email
    })
    res.send(data)
})


app.listen(port, () => {
    console.log(`Port ${port} is running Siuu`);
})
const express = require("express");
const phoneData = require("./1.phones.json");
const cors = require("cors");
const app = express();
const port = 3000;


app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>welcome to phoner dokan</h1>");
})

app.get("/phone", (req, res) => {
    res.send(phoneData);
})

app.get("/phone/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = phoneData.find((phone) => phone.id === id);
    res.send(data || {})
})

app.listen(port, () => {
    console.log(`Listening ${port}`);
})


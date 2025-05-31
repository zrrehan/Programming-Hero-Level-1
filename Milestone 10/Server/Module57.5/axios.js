const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("get triggered");
    res.send(["Hello world"]);
});

app.post("/", (req, res) => {
    console.log("Sent by Client Side:",req.body);
    res.send(["hello world"]);
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});
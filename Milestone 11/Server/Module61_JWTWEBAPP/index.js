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

app.get("/my-applications", (req, res) => {
    const email = req.query.email;
    let applications = users.filter((singleUser) => singleUser.email === email);
    res.send(applications)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

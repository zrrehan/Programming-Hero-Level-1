const express = require('express');
const jwt = require('jsonwebtoken');
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

app.get('/jwt', (req, res) => {
    res.send('Hello World!')
})

app.post("/jwt", (req, res) => {
    const {email} = req.body;
    const user = {email}
    const token = jwt.sign(user, "secret", {expiresIn: "1h"});
    res.send(token);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
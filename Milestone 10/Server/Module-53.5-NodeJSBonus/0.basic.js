const express = require("express");
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Hello </h1>")
})

app.listen(port, () => {
    console.log("App listening port", port);
});

// Use Nodemon to automatically restart the server on code changes
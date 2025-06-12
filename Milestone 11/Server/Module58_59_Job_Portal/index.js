const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb")
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://firstDB:f0B2LPjqvXhnSdc9@cluster0.vuskb8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('userdb');
        const jobs = database.collection('jobs');
        
        app.get("/", async(req, res) => {
            const cursor = jobs.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get("/details/:id", async(req, res) => {
            const id = req.params.id
            const cursor = jobs.find({_id: new ObjectId(id)})
            const result = await cursor.toArray();
            res.send(result[0])
        })
    } finally {
        
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
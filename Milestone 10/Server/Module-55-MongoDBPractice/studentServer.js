const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { password } = require("./credentials");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


// const uri = "mongodb+srv://firstDB:f0B2LPjqvXhnSdc9@cluster0.vuskb8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const uri = `mongodb+srv://firstDB:${password}@cluster0.vuskb8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true, 
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const database = client.db("userdb");
        const students = database.collection("students");
        

        app.get("/getAll", async (req, res) => {
            const cursor = students.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.post("/", async(req, res) => {
            console.log(req.body);
            const result = await students.insertOne(req.body);
            return result; // return with the ID 
        })

        app.delete("/", async(req, res) => {
            const {id} = req.body;
            const query = {_id: new ObjectId(id)}
            const result = await students.deleteOne(query);
            res.send(result);
        })

        app.put("/", async(req, res) => {
            const {id, number} = req.body;
            const filter = {_id: new ObjectId(id)};
            const updatedDocument = {
                $set: {
                    number: number
                }
            }

            const result = await students.updateOne(filter, updatedDocument);
            res.send(result);
        })

        
    }   
    finally {

    } 
}

run().catch(console.dir());

app.listen(port, () => {
    console.log("Port is Running on", port)
})
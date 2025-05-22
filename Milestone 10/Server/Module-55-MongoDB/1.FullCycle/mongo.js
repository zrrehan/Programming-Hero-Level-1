const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = 3000;
const cors = require("cors");
const { password, username } = require("./credentials.js");

// Middleware
app.use(cors());
app.use(express.json());

// mongo URI <<NEW>>
const uri = `mongodb+srv://${username}:${password}@cluster0.vuskb8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// creating a MONGO CLIENT <<NEW>>
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Run MongoDB <<NEW>>
async function run() {
    try {
        await client.connect();

        const database = client.db("userdb");
        const usersCollection = database.collection("users");

        app.get("/users", async(req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get("/users/:id", async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await usersCollection.findOne(query);
            res.send(result)
        })

        app.put("/users/:id", async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const {email} = req.body;
            
            const updatedDoc = {
                $set: {
                    email: email,
                }
            }

            const result = await usersCollection.updateOne(filter, updatedDoc)

            console.log(email);
            res.send(result);
        })

        app.post("/users", async (req, res) => {
            console.log("server:", req.body);
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        })

        app.delete("/users/:id", async(req, res) => {
            console.log("Deleted", req.params.id);
            const query = { _id: new ObjectId(req.params.id)}
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })

    } 
    finally {

    }
}

run().catch(console.log);


// routes 
app.get("/", (req, res) => {
    res.send("Hello world! 3000");
})

app.listen(port, () => {
    console.log(`Port Is Running on ${port}`);
})
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());




const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb://firstDB:f0B2LPjqvXhnSdc9@ac-ujmsrle-shard-00-00.vuskb8c.mongodb.net:27017,ac-ujmsrle-shard-00-01.vuskb8c.mongodb.net:27017,ac-ujmsrle-shard-00-02.vuskb8c.mongodb.net:27017/?ssl=true&replicaSet=atlas-9hl66u-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productCollection = client.db('emaJohnDB').collection('products');

    app.get("/product-count", async(req, res) => {
      const result = await productCollection.estimatedDocumentCount();
      res.send({count: result});
    })

    app.get("/products-pagination", async(req, res) => {
      let {cardNumber, label} = req.query;
      [cardNumber, label] = [parseInt(cardNumber), parseInt(label)];
      console.log(cardNumber, label);
      const result = await productCollection.find().skip(label * cardNumber).limit(cardNumber).toArray();
      res.send(result);
    })

    app.get('/products', async(req, res) => {
        const result = await productCollection.find().toArray();
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) =>{
    res.send('john is busy shopping')
})

app.listen(port, () =>{
    console.log(`ema john server is running on port: ${port}`);
})

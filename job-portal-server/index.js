const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

require('dotenv').config()
// console.log(process.env.DB_USER)

// Use middleware
app.use(express.json())
app.use(cors())

const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lz3uyug.mongodb.net/?retryWrites=true&w=majority`;

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
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Create Database
    const database = client.db("job-portal");
    const jobCollection = database.collection("jobs");

    // Post a job
    app.post("/post-job", async (req, res) => {
      const job = req.body
      job.createAt = new Date()
      console.log(job)
      const result = await jobCollection.insertOne(job)
      if (result.insertedId) {
        return res.status(200).send(result)
      } else {
        return res.status(500).send({message: "Failed to post job, try again later", status: false})
      }
    });

    // Update a job
    app.put("/update-job/:id", async (req, res) => {
      const id = req.params.id
      const job = req.body
      job.updatedAt = new Date()
      const result = await jobCollection.updateOne({_id: new ObjectId(id)}, {$set: {...job}})
      res.send(result)
    })

    // Get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollection.find({}).toArray();
      res.send(jobs);
    });

    // Get a job by id
    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobCollection.findOne({_id: new ObjectId(id)});
      res.send(job);
    })

    // Delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id
      console.log(id)
      const result = await jobCollection.deleteOne({_id: new ObjectId(id)})
      res.send(result)
    })

    // Get a job by email
    app.get("/my-jobs/:email", async (req, res) => {
      console.log(req.params.email)
      const email = req.params.email;
      const jobs = await jobCollection.find({postedBy : req.params.email}).toArray()
      res.send(jobs)
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

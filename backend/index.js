import express, {response} from "express"
import {PORT, mongoURL} from "./config.js"
import mongoose from "mongoose";
import jobsRoute from "./routes/jobsRoute.js";

const app = express()

app.get("/", (req, res) => {
	return res.status(234).send("Backend Homepage")
})

app.use(express.json())

app.use("/jobs", jobsRoute)

mongoose.connect(mongoURL).then( () =>{
	console.log("Database connection established")
	app.listen(PORT, () => {
		console.log(`Server running on port: ${PORT}`)
	})
})


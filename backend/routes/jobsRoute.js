import express, {json} from "express";
import {Job} from "../models/JobModels.js"

const router = express.Router()


// Fetch all books
router.get("/", async (req, res) => {
	try{
		const jobs = await Job.find({})

		res.status(200).json({
			data: jobs
		})
		console.log(jobs)
	} catch (error) {
		console.log(error)
		res.status(500).send({message: error.message})
	}

})


// Create new book
router.post("/", async (req, res) => {
	try {
		if(
			!req.body.companyName || !req.body.jobTitle ||
			!req.body.minPrice || !req.body.maxPrice ||
			!req.body.salaryType || !req.body.jobLocation ||
			!req.body.postingDate || !req.body.experienceLevel ||
			!req.body.employmentType || !req.body.description
		) {
			res.status(500).send("All fields are required")
		}
		const newJob = {
			"companyName": req.body.companyName,
      "jobTitle": req.body.jobTitle,
      "minPrice": req.body.minPrice,
      "maxPrice": req.body.maxPrice,
      "salaryType": req.body.salaryType,
      "jobLocation": req.body.jobLocation,
      "postingDate": req.body.postingDate,
      "experienceLevel": req.body.experienceLevel,
      "employmentType": req.body.employmentType,
      "description": req.body.description
		}

		const job = await Job.create(newJob)

		return res.status(200).send(job)
	} catch (error) {
		console.log(error)
		res.status(500).send("An error occurred")
	}
})


// Get book with a particular ID
router.get("/:id", async (req, res) => {
	try{
		const {id} = req.params

		const job = await Job.findById(id)

		res.status(200).json({
			data: job
		})
		console.log(job)
	} catch (error) {
		console.log(error)
		res.status(500).send({message: error.message})
	}

})


// Update book with a particular ID
router.put("/:id", async (req, res) => {
	try {
		if(
			!req.body.companyName || !req.body.jobTitle ||
			!req.body.minPrice || !req.body.maxPrice ||
			!req.body.salaryType || !req.body.jobLocation ||
			!req.body.postingDate || !req.body.experienceLevel ||
			!req.body.employmentType || !req.body.description
		) {
			res.status(500).send("All fields are required")
		}
		const {id} = req.params



		const updatedJob = await Job.findByIdAndUpdate(id, req.body)

		if(!updatedJob) {
			res.status(404).send({message: "No job with the above ID was found"})
			console.log("No job with the above ID was found")
		}

		return res.status(200).send({message: "Book updated successfully."})
	} catch (error) {
		console.log(error)
		res.status(500).send("An error occurred")
	}
})


// Delete job with specific ID
router.delete("/:id", async (req, res) => {
	try {
		const {id} = req.params



		const result = await Job.findByIdAndDelete(id, req.body)

		if(!result) {
			res.status(404).send({message: "No job with the above ID was found"})
			console.log("No job with the above ID was found")
		}

		return res.status(200).send({message: "Job deleted successfully."})
	} catch (error) {
		console.log(error)
		res.status(500).send("An error occurred")
	}
})
export default router
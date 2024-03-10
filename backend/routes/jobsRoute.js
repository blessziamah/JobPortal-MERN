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

export default router
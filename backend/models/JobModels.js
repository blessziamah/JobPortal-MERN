import mongoose from "mongoose";
import * as buffer from "buffer";

const jobSchema = mongoose.Schema(
	{
		companyName: {
			type: String,
			required: true
		},
		jobTitle: {
			type: String,
			required: true
		},
		minPrice: {
			type: String,
			required: true
		},
		maxPrice: {
			type: String,
			required: true
		},
		salaryType: {
			type: String,
			required: true
		},
		jobLocation: {
			type: String,
			required: true
		},
		postingDate: {
			type: String,
			required: true
		},
		experienceLevel: {
			type: String,
			required: true
		},
		employmentType: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		companyLogo: {
			type: String,
			data: buffer,
			required: false
		},
	},
	{timestamps: true}
)



export const Job = mongoose.model("Job", jobSchema)
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import CreatableSelect from "react-select"
import "../App.css"

const CreateJob = () => {
	const [selectedOption, setSelectedOption] = useState(null)

	const {
		register,
		handleSubmit,
		reset,
		formState: {},
	} = useForm()

	const onSubmit = (data) => {
		data.skills = selectedOption
		console.log(data)
		fetch("http://localhost:3000/post-job", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(
			res => res.json()
		)
			.then((result) => {
				console.log(result)
				if(result.acknowledged === true) {
					alert("Job posted successfully")
				}
				reset()
			})
	}

	const options = [
		{value: "JavaScript", label: "JavaScript"},
		{value: "C++", label: "C++"},
		{value: "Python", label: "Python"},
		{value: "HTML", label: "HTML"},
		{value: "CSS", label: "CSS"},
		{value: "Django", label: "Django"},
		{value: "Ruby", label: "Ruby"},
		{value: "Angular", label: "Angular"},
		{value: "Redux", label: "Redux"}
	]


	return (
		<div className={"max-w-screen-2xl container mx-auto xl:px-24 px-4"}>
			{/*Form*/}

			<div className={"bg-[#FAFAFA] py-10px-4 lg:px-16"}>
				<form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>

					{/*First row of input*/}
					<div className={"flex flex-col lg:flex-row items-center justify-between gap-8"}>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Job Title</label>
							<input type="text" defaultValue={"Web developer"} {...register("jobTitle")}
										 className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"}/>
						</div>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Company Name</label>
							<input type="text" placeholder={"Ex: Samsung"} {...register("companyName")}
										 className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"}/>
						</div>
					</div>

					{/*Second row of input*/}
					<div className={"flex flex-col lg:flex-row items-center justify-between gap-8"}>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Minimum Salary</label>
							<input type="text" placeholder={"$20k"} {...register("minPrice")}
										 className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"}/>
						</div>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Maximum Salary</label>
							<input type="text" placeholder={"$120k"} {...register("maxPrice")}
										 className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"}/>
						</div>
					</div>


					{/*Third row of input*/}
					<div className={"flex flex-col lg:flex-row items-center justify-between gap-8"}>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Salary Type</label>
							<select
								className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"} {...register("salaryType",)}>
								<option value="">Choose salary type</option>
								<option value="Hourly">Hourly</option>
								<option value="Monthly">Monthly</option>
								<option value="Annually">Annually</option>
							</select>
						</div>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Job Location</label>
							<input type="text" placeholder={"Ex: Silicon Valley"} {...register("jobLocation")}
										 className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"}/>
						</div>
					</div>


					{/*Fourth row of input*/}
					<div className={"flex flex-col lg:flex-row items-center justify-between gap-8"}>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Job Posting Date</label>
							<input type="date" placeholder={"2023-11-07"} {...register("postingDate")}
										 className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"}/>
						</div>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Experience Level</label>
							<select
								className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"} {...register("experienceLevel",)}>
								<option value="">Choose experience level</option>
								<option value="NoExperience">Any experience</option>
								<option value="Internship">Monthly</option>
								<option value="Work remotely">Work remotely</option>
							</select>
						</div>
					</div>

					{/*Fifth row of input*/}
					<div>
						<label className={"block mb-2 text-lg"}>Require Skill Sets</label>
						<CreatableSelect className={"create-job-input"} defaultValue={selectedOption} onChange={setSelectedOption}
														 options={options} isMulti/>
					</div>

					{/*Sixth row of input*/}
					<div className={"flex flex-col lg:flex-row items-center justify-between gap-8"}>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Company Logo</label>
							<input type="url" placeholder={"Paste your company logo url: https://myimage.com"} {...register("companyLogo")}
										 className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"}/>
						</div>
						<div className={"lg:w-1/2 w-full"}>
							<label className={"block mb-2 text-lg"}>Employment Type</label>
							<select
								className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"} {...register("employmentType",)}>
								<option value="">Choose employment type</option>
								<option value="Full-time">Full-time</option>
								<option value="Part-time">Part-time</option>
								<option value="Temporary">Temporary</option>
							</select>
						</div>
					</div>


					{/*Seventh row of input*/}
					<div className={"w-full"}>
						<label className={"block mb-2 text-lg"}>Job Description</label>
						<textarea {...register("description")} className={"w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"} rows={6} placeholder={"Job Description"} defaultValue={"Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."}/>
					</div>

					{/*Last row of input*/}
					<div className={"w-full"}>
						<label className={"block mb-2 text-lg"}>Job Posted By</label>
						<input type="email" placeholder={"youremail@email.com"} {...register("postedBy")}
									 className={"block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"}/>
					</div>

					{/*Submit button*/}
					<input type="submit"
								 className={"block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded cursor-pointer"}/>
				</form>
			</div>
		</div>
	);
};

export default CreateJob;
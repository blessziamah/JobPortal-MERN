import React, {useEffect, useState} from 'react';
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import Jobs from "./Jobs.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";

const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const [jobs, setJobs] = useState([])

	useEffect(() => {
		fetch("jobs.json").then((res) => res.json()).then((data) => {
			setJobs(data)
		})
	}, []);


	const [query, setSearchQuery] = useState("")
	const handleInputChange = (event) => {
		setSearchQuery(event.target.value)
	}


	// Filter jobs by title
	const filteredItems = jobs.filter((job) => (
		job.jobTitle.toLowerCase().indexOf(query.toLowerCase())
	) !== -1)

	// Radio-based button filtering
	const handleChange = (event) => {
		setSelectedCategory(event.target.value)
	}

	// Button-based filtering
		const handleClick = (event) => {
			setSelectedCategory(event.target.value)
		}


		// Main functions
	const filteredData = (jobs, selected, query) => {
		let filteredJobs = jobs

		// Filtering based on search query
		if(query) {
			filteredJobs = filteredItems
		}

		// Category based filtering
		if(selected) {
			filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postindDate}) => (
				jobLocation.toLowerCase() === selected.toLowerCase() ||
					parseInt(maxPrice) <= parseInt(selected) ||
					salaryType.toLowerCase() === selected.toLowerCase() ||
					experienceLevel.toLowerCase() === selected.toLowerCase()||
					employmentType.toLowerCase() === selected.toLowerCase()
			))
			console.log(filteredJobs)
		}

		return filteredJobs.map((data, index) => (
			<Card key={index} data={data}/>
		))
	}

	const result = filteredData(jobs, selectedCategory, query)

	return (
		<div>
			<Banner query={query} handleInputChange={handleInputChange}/>

			{/*Main content*/}
			<div className={"bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 py-12"}>

				{/*Left side*/}
				<div className={"bg-white p-4 rounded"}>
					<Sidebar handleChange={handleChange} handleClick={handleClick()}/>
				</div>

				{/*Job cards*/}
				<div className={"col-span-2 bg-white p-4 rounded"}><Jobs result={result} /></div>

				{/*Right side*/}
				<div className={"bg-white p-4 rounded"}>Right</div>
			</div>
		</div>
	);
};

export default Home;
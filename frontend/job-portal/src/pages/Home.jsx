import React, {useEffect, useState} from 'react';
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import Jobs from "./Jobs.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";

const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const [jobs, setJobs] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 6

	useEffect(() => {
		setIsLoading(true)
		fetch("jobs.json").then((res) => res.json()).then((data) => {
			setJobs(data)
			setIsLoading(false)
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


	// Calculate the index range
	const calculatePageRange = () => {
		const startIndex = (currentPage - 1) * itemsPerPage
		const endIndex = startIndex + itemsPerPage
		return {startIndex, endIndex}
	}

	// Function for the next page
	const nextPage = () => {
		if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
			setCurrentPage(currentPage + 1)
		}
	}

	// Function for the previous page
	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	// Button-based filtering
	const handleClick = (event) => {
		setSelectedCategory(event.target.value)
	}


	// Main functions
	const filteredData = (jobs, selected, query) => {
		let filteredJobs = jobs

		// Filtering based on search query
		if (query) {
			filteredJobs = filteredItems
		}

		// Category based filtering
		if (selected) {
			filteredJobs = filteredJobs.filter(({
																						jobLocation,
																						maxPrice,
																						experienceLevel,
																						salaryType,
																						employmentType,
																						postingDate
																					}) => (
				jobLocation.toLowerCase() === selected.toLowerCase() ||
				parseInt(maxPrice) <= parseInt(selected) ||
					postingDate >= selected ||
				salaryType.toLowerCase() === selected.toLowerCase() ||
				employmentType.toLowerCase() === selected.toLowerCase()

			))
			console.log(filteredJobs)
		}

		// Slice the data based on current page
		const {startIndex, endIndex} = calculatePageRange()
		filteredJobs = filteredJobs.slice(startIndex, endIndex)

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
					<Sidebar handleChange={handleChange} handleClick={handleClick}/>
				</div>

				{/*Job cards*/}
				<div className={"col-span-2 bg-white p-4 rounded"}>
					{
						isLoading ? (<p className={"font-medium"}>Loading...</p>) : result.length > 0 ? (
							<Jobs result={result}/>) : <><h3 className={"text-lg font-bold mb-2"}>{result.length} Jobs</h3>
							<p>No data found!</p>
						</>
					}

					{/*Pagination*/}
					{
						(result.length > 0) ? (
							<div className={"flex justify-center mt-4 space-x-8"}>
								<button onClick={prevPage} className={"hover:underline"} disabled={currentPage === 1}>Previous</button>
								<span className={"mx-2"}>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
								<button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
												className={"hover:underline"}>Next
								</button>
							</div>
						) : ""
					}

				</div>

				{/*Right side*/}
				<div className={"bg-white p-4 rounded"}>Right</div>
			</div>
		</div>
	);
};

export default Home;
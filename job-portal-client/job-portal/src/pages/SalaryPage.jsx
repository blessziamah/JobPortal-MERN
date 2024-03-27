import React, {useState} from 'react';
import PageHeader from "../components/PageHeader.jsx";

const SalaryPage = () => {
	const [searchText, setSearchText] = useState("");
	const [salary, setSalary] = useState([]);
	const handleSearch = () => {
		const filter = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
	};

	return (
		<div className={"max-w-screen-2xl container mx-auto xl:px-24 px-4"}>
			<PageHeader title={"Estimate Salary"} path={"Salary"}/>

			<div className={"mt-5"}>
				<div className={"search-box p-2 text-center mb-2"}>
					<input onClick={handleSearch} onChange={(event) => setSearchText(event.target.value)} type={"text"} name={"search"} id={"search"}
								 className={"py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"}/>
					<button className={"bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"}>Search</button>
				</div>
			</div>
		</div>
	);
};

export default SalaryPage;
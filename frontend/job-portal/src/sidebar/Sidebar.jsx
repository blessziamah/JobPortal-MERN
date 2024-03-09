import React from 'react';
import Location from "./Location.jsx";
import Salary from "./Salary.jsx";
import JobPostingData from "./JobPostingData.jsx";
import WorkExperience from "./WorkExperience.jsx";

const Sidebar = ({handleChange, handleClick}) => {
	return (
		<div className={"space-y-5"}>
			<h3 className={"text-lg font-bold mb-2"}>Filters</h3>

			<Location handleChange={handleChange} />
			<Salary handleChange={handleChange} handleClick={handleClick}/>
			<JobPostingData handleChange={handleChange} />
			<WorkExperience handleChange={handleChange} />
		</div>
	);
};

export default Sidebar;
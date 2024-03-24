import React from 'react';
import InputField from "../components/InputField.jsx";

const WorkExperience = ({handleChange}) => {
	return (
		<div>
			<h4 className={"text-lg font-medium mb-2"}>Work Experience</h4>

			<div>
				<label className={"sidebar-label-container"}>
					<input type={"radio"} name={"test"} id={"test"} value={""} onChange={handleChange}/>
					<span className={"checkmark"}></span>Any Experience
				</label>

				<InputField handleChange={handleChange} name={"test"} value={"Internship"} title={"Internship"}/>
				<InputField handleChange={handleChange} name={"test"} value={"Remote"} title={"Remote"}/>
				{/*<InputField handleChange={handleChange} name={"test"} value={"Madrid"} title={"Madrid"}/>*/}
				{/*<InputField handleChange={handleChange} name={"test"} value={"Boston"} title={"Boston"}/>*/}
			</div>
		</div>
	);
};

export default WorkExperience;
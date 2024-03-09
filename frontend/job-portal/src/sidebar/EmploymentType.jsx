import React from 'react';
import InputField from "../components/InputField.jsx";

const EmploymentType = ({handleChange}) => {
	return (
		<div>
			<h4 className={"text-lg font-medium mb-2"}>Employment Type</h4>

			<div>
				<label className={"sidebar-label-container"}>
					<input type={"radio"} name={"test"} id={"test"} value={""} onChange={handleChange}/>
					<span className={"checkmark"}></span>Any Type
				</label>

				<InputField handleChange={handleChange} name={"test"} value={"Full-time"} title={"Full-time"}/>
				<InputField handleChange={handleChange} name={"test"} value={"Part-time"} title={"Part-time"}/>
				<InputField handleChange={handleChange} name={"test"} value={"Temporary"} title={"Temporary"}/>
				{/*<InputField handleChange={handleChange} name={"test"} value={"Boston"} title={"Boston"}/>*/}
			</div>
		</div>
	);
};

export default EmploymentType;
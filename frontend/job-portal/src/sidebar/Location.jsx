import React from 'react';
import "../App.css"

const Location = () => {
	return (
		<div>
			<h4 className={"text-lg font-medium mb-2"}>Location</h4>

			<div>
				<label className={"sidebar-label-container"}>
					<input type={"radio"} name={"test"} id={"test"} />
				</label>
			</div>
		</div>
	);
};

export default Location;
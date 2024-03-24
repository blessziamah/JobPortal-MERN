import React from 'react';
import {Link} from "react-router-dom";
import "../App.css"
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from "react-icons/fi";

const Card = ({data}) => {
	const {jobTitle, companyName, companyLogo, minPrice, maxPrice, jobLocation, employmentType, postingDate, description} = data

	return (
		<section className={"card"}>
			<Link to={"/"} className={"flex gap-4 flex-cols sm:flex-row items-start"}>
				<img src={companyLogo} alt={"company logo"} />
				<div>
					<h4 className={"text-primary mb-1"}>{companyName}</h4>
					<h3 className={"text-lg font-semibold mb-2"}>{jobTitle}</h3>

					<div className={"text-primary/70 text-base flex flex-wrap gap-2 mb-2"}>
						<span className={"flex items-center gap-2"}><FiMapPin />{jobLocation}</span>
						<span className={"flex items-center gap-2"}><FiClock />{employmentType}</span>
						<span className={"flex items-center gap-2"}><FiDollarSign />{minPrice}-{maxPrice}k</span>
						<span className={"flex items-center gap-2"}><FiCalendar />{postingDate}</span>
					</div>

					<p className={"text-primary text-base/70"}>{description}</p>
				</div>
			</Link>
		</section>
	);
};

export default Card;
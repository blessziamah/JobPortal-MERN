import React from 'react';
import {FaEnvelope} from "react-icons/fa6";
import {FaRocket} from "react-icons/fa";

const Newsletter = () => {
	return (
		<div>
			<div>
				<h3 className={"text-lg font-bold mb-2 flex items-center gap-2"}><FaEnvelope/>Email me for jobs</h3>
				<p className={"text-primary/75 text-base mb-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt.</p>

				<div className={"w-full space-y-4"}>
					<input type={"email"} name={"email"} id={"email"} placeholder={"Johndoe@email.com"}
								 className={"w-full block py-2pl-3 border focus:outline-none"}/>
					<input type={"submit"} value={"Subscribe"}
								 className={"w-full block py-2pl-3 border focus:outline-none font-semibold bg-blue rounded-sm text-white"}/>
				</div>
			</div>


			<div className={"mt-24"}>
				<h3 className={"text-lg font-bold mb-2 flex items-center gap-2"}><FaRocket />Get noticed faster</h3>
				<p className={"text-primary/75 text-base mb-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt.</p>

				<div className={"w-full space-y-4"}>
					<input type={"submit"} value={"Upload your resume"}
								 className={"w-full block py-2pl-3 border focus:outline-none font-semibold bg-blue rounded-sm text-white"}/>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
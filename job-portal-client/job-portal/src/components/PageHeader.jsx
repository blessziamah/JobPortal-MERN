import React from 'react';

const PageHeader = ({title, path}) => {
	return (
		<div className={"py-24 mt-3 bg-[#FAFAFA] flex items-center justify-center"}>
			<div>
				<h1 className={"text-3xl text-blue font-medium mb-1 text-center"}>{title}</h1>
				<p className={"text-sm text-center"}><a href={"/"}>Home</a> / {path} </p>
			</div>

		</div>
	);
};

export default PageHeader;
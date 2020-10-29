import React from "react";

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3 tc'>{`Hello ${name}, total image detected so far is:`}</div>
			<div className='white f1'>{entries}</div>
		</div>
	);
};

export default Rank;

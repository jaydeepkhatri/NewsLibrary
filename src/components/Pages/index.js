import { useState, useEffect, React } from "react";

const Pages = ({ current, changepage, total }) => {

	let totalpages = Math.ceil(total / 20);
	const [prev, setPrev] = useState('');
	const [next, setNext] = useState('');

	const previousPage = () => {
		changepage(Number(current) - 1);
	}
	const handleClick = (e) => {
		changepage(Number(current) + 1);
	}
	useEffect(() => {
		setPrev(Number(current) - 1);
		setNext(Number(current) + 1);
	}, [next, prev, current])

	return (
		<div className="pagescontainer">
			{(prev > 0) ? <button className="pagebtn" onClick={previousPage}><i className="fa fa-chevron-left"></i></button> : null}
			<h2>Page {current} of {totalpages}</h2>
			{(next > totalpages) ? null : <button className="pagebtn" onClick={handleClick}><i className="fa fa-chevron-right"></i></button>}

		</div>
	)
}

export default Pages;
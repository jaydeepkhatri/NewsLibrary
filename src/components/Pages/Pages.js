import  React,{ useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./pages.scss";

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
			{(prev > 0) ? <button className="pagebtn" onClick={previousPage}><FaChevronLeft /></button> : null}
			<h2>Page {current} of {totalpages}</h2>
			{(next > totalpages) ? null : <button className="pagebtn" onClick={handleClick}><FaChevronRight /></button>}

		</div>
	)
}

export default Pages;
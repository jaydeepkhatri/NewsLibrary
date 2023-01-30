import  React,{ useState, useEffect, useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AppContext } from "../../App";
import "./pages.scss";

const Pages = () => {

	const { pageNumber, changepage, totalPage } = useContext(AppContext);

	let totalpages = Math.ceil(totalPage / 20);
	const [prev, setPrev] = useState('');
	const [next, setNext] = useState('');

	const previousPage = () => {
		changepage(Number(pageNumber) - 1);
	}
	const handleClick = (e) => {
		changepage(Number(pageNumber) + 1);
	}
	useEffect(() => {
		setPrev(Number(pageNumber) - 1);
		setNext(Number(pageNumber) + 1);
	}, [next, prev, pageNumber])

	return (
		<div className="pagescontainer">
			{(prev > 0) ? <button className="pagebtn" onClick={previousPage}><FaChevronLeft /></button> : null}
			<h2>Page {pageNumber} of {totalpages}</h2>
			{(next > totalpages) ? null : <button className="pagebtn" onClick={handleClick}><FaChevronRight /></button>}

		</div>
	)
}

export default Pages;
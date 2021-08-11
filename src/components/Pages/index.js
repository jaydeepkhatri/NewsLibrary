const Pages = ({ current, changepage, total }) => {

	let totalpages = total / 20;
	const handleClick = (e) => {

		changepage('2');
	}
	const previousPage = () => {

	}

	return (
		<div className="pagescontainer">
			<button onClick={previousPage}>Page {current - 1}</button>
			<h1>Page {current} of {totalpages}</h1>
			<button onClick={handleClick}>Page {current + 1}</button>
		</div>
	)
}

export default Pages;
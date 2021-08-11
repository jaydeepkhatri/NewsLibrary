import { useState, useEffect } from "react";
import Pages from "../Pages";
import axios from "axios";

const Main = () => {
	const [news, setNews] = useState('');
	const [pageNumber, setPageNumber] = useState('1');
	const [totalPage, setTotalPage] = useState('0');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios.get(`https://newsapi.org/v2/top-headlines?category=business&page=${pageNumber}&apiKey=${process.env.REACT_APP_KEY}`)
			.then(
				(e) => {
					console.log(e.data)
					setNews(e.data);
					setTotalPage(e.data.totalResults);
					setLoading(false);
				}
			);
	}, [pageNumber]);

	const changepage = (page) => {
		setPageNumber(page);
	}


	return (
		<>
			<div className="maincontainer">
				{
					loading ? <h1 align="center">Hang on.. Fetching</h1> :
						<> {
							news.articles.map((article, index) =>
								<div className="news" key={index}>
									<div className="upper">
										<h3 className="newstitle">{article.title}</h3>
										<p className="description">{article.description}</p>
									</div>

									<div className="links">
										<div className="social">
											<a href="google.com" className="link fb"><i className="fab fa-facebook"></i></a>
											<a href="google.com" className="link twt"><i className="fab fa-twitter"></i></a>
										</div>
										<a href="google.com" referrerPolicy="no-referrer" className="readfull">Read Full <i className="fa fa-chevron-right"></i></a>
									</div>
								</div>
							)
						}
							<Pages current={pageNumber} changepage={changepage} total={totalPage} />
						</>
				}

			</div>
		</>
	)
}

export default Main;
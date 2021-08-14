import { useState, useEffect } from "react";
import Pages from "../Pages";
import Covidinfo from "../Covidinfo";
import axios from "axios";

const Main = () => {
	const [news, setNews] = useState('');
	const [pageNumber, setPageNumber] = useState('1');
	const [totalPage, setTotalPage] = useState('0');
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState('business');
	const [language, setLanguage] = useState('en');
	useEffect(() => {
		axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&page=${pageNumber}&language=${language}&apiKey=${process.env.REACT_APP_KEY}`)
			.then(
				(e) => {
					console.log(e.data)
					setNews(e.data);
					setTotalPage(e.data.totalResults);
					setLoading(false);
				}
			);
	}, [pageNumber, language, category]);

	const changepage = (page) => {
		setPageNumber(page);
		setLoading(true);
	}

	const languageChange = (e) => {
		setLoading(true);
		setLanguage(e.target.value);
	}

	const categoryChange = (e) => {
		setLoading(true);
		setCategory(e.target.value);
	}


	return (
		<>
			<div className="maincontainer">
				{
					loading ? <h1 align="center">Hang on.. Fetching</h1> :
						<>
							<div className="leftcontainer">
								<div className="settings">
									<select onChange={languageChange} value={language}>
										<option value="ar">Arabic</option>
										<option value="de">German</option>
										<option value="en">English</option>
										<option value="es">Spanish</option>
										<option value="fr">French</option>
										<option value="he">Hebrew</option>
										<option value="it">Italian</option>
										<option value="nl">Dutch</option>
										<option value="no">Norwegian</option>
										<option value="pt">Portuguese</option>
										<option value="ru">Russian</option>
										<option value="se">Sami</option>
										<option value="zh">Chinese</option>
									</select>
									<div className="search">
										<select onChange={categoryChange} value={category}>
											<option value="business">Business</option>
											<option value="entertainment">Entertainment</option>
											<option value="general">General</option>
											<option value="health">Health</option>
											<option value="science">Science</option>
											<option value="sports">Sports</option>
											<option value="technology">Technology</option>
										</select>
									</div>
								</div>

								<div className="newscontainer">
									{
										news.articles.map((article, index) =>
											<div className="news" key={index}>
												<div className="upper">
													<img src={article.urlToImage} alt={article.title} className="newsimage" />
													<h3 className="newstitle">{article.title}</h3>
													<p className="source">Source - {article.source.name}</p>
													<p className="description">{article.description}</p>
												</div>

												<div className="links">
													<div className="social">
														<a href={`http://facebook.com/sharer/sharer.php?u=${article.url}&quote=${article.title}`} className="link fb"><i className="fab fa-facebook"></i></a>
														<a href={`http://twitter.com/share?url=${article.url}`} className="link twt"><i className="fab fa-twitter"></i></a>
													</div>
													<a href={article.url} referrerPolicy="no-referrer" className="readfull">Read More <i className="fa fa-chevron-right"></i></a>
												</div>
											</div>
										)
									}
									<Pages current={pageNumber} changepage={changepage} total={totalPage} />
								</div>
							</div>
							<div className="rightcontainer">
								<Covidinfo />
							</div>
						</>
				}

			</div>
		</>
	)
}

export default Main;
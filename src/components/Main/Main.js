import "./main.scss";
import React,{ useEffect, useContext } from "react";
import { Pages, Finance} from "../";
import { BsFacebook } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import axios from "axios";
import { AppContext } from "../../App";

const Main = () => {
	const { pageNumber, language, category, loading, news, setNews, setTotalPage, setLoading, setLanguage, setCategory, setFinanceRates } = useContext(AppContext)
	
	useEffect(() => {
		axios.all([
			axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&page=${pageNumber}&language=${language}&apiKey=${process.env.REACT_APP_KEY}`),
			axios.get(`https://open.er-api.com/v6/latest/USD`)
		  ])
			.then(axios.spread((obj1, obj2) => {
				setNews(obj1.data);
				setTotalPage(obj1.data.totalResults);
				setFinanceRates(obj2.data.rates);
				setLoading(false);
				console.log(obj2.data.rates);
			}));
	}, [pageNumber, language, category, setNews, setTotalPage, setLoading, setFinanceRates]);

	

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
							<div className="left-container">
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
													<a href={article.url} className="newstitle">{article.title}</a>
													<p className="source">Source - {article.source.name}</p>
													<p className="description">{article.description}</p>
												</div>

												<div className="links">
													<div className="social">
														<a href={`http://facebook.com/sharer/sharer.php?u=${article.url}&quote=${article.title}`} className="link fb"><BsFacebook /></a>
														<a href={`http://twitter.com/share?url=${article.url}`} className="link twt"><AiOutlineTwitter /></a>
													</div>
													<a href={article.url} referrerPolicy="no-referrer" className="readfull">Read More <FaChevronRight /></a>
												</div>
											</div>
										)
									}
									<Pages />
								</div>
							</div>
							<div className="right-container">
								<Finance />
							</div>
						</>
				}
			</div>
		</>
	)
}

export default Main;
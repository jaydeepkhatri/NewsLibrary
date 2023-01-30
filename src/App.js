import { useState, createContext } from "react";
import "./style/main.scss";
import { Navbar, Main, Footer, ScrollUp } from "./components";

export const AppContext = createContext(null);


function App() {
  const [news, setNews] = useState('');
	const [pageNumber, setPageNumber] = useState('1');
	const [totalPage, setTotalPage] = useState('0');
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState('business');
	const [language, setLanguage] = useState('en');

  const changepage = (page) => {
		setPageNumber(page);
		setLoading(true);
	}

  return (
    <>
      <Navbar />
      <AppContext.Provider value={{news, setNews, pageNumber, setPageNumber, totalPage, setTotalPage, loading, setLoading, category, setCategory, language, setLanguage, changepage}}>
        <Main />
        <Footer />
      </AppContext.Provider>
      <ScrollUp />
    </>
  );
}

export default App;

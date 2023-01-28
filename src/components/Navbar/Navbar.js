import React from "react";
import "./navbar.scss";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h2 className="title">
				NewsLibrary
			</h2>
			<a href="https://github.com/jaydeepkhatri/NewsLibrary" target="_blank" rel="noopener noreferrer" className="github">
				<i className="fab fa-github"></i>
			</a>
		</nav>
	)
}

export default Navbar;
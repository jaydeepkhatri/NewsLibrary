import React from "react";
import "./navbar.scss";
import { AiOutlineGithub } from "react-icons/ai";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="header-nav">
				<h2 className="title">
					NewsLibrary
				</h2>
				<a href="https://github.com/jaydeepkhatri/NewsLibrary" target="_blank" rel="noopener noreferrer" className="github">
					<AiOutlineGithub />
				</a>
			</div>
		</nav>
	)
}

export default Navbar;
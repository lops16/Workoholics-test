import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import workoLogo from "../../assets/logo.svg";
import "./Header.scss";
import { useState } from "react";

export default function Header() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header>
			<div className="logo-container">
				<img src={workoLogo} alt="Workoholics logo" />
			</div>
			<nav id="desktop-nav">
				<ul>
					<li className="menu-one">
						{" "}
						<a href="">Menu 1</a>
					</li>
					<li className="menu-two">
						<a href="">Menu 2</a>
					</li>
					<li className="menu-three">
						<a href="">Menu 3</a>
					</li>
				</ul>
			</nav>
			<section id="menu-icons">
				{!isMobileMenuOpen && (
					<IconButton className="burger-menu" onClick={toggleMobileMenu}>
						<MenuIcon />
					</IconButton>
				)}
				{isMobileMenuOpen && (
					<IconButton className="close-menu" onClick={toggleMobileMenu}>
						<CloseIcon />
					</IconButton>
				)}
			</section>
			{isMobileMenuOpen && (
				<nav id="mobile-nav">
					<div className="mobile-nav-list">
						<ul>
							<li className="menu-mobile-one">Menu 1</li>
							<li className="menu-mobile-two">Menu 2</li>
							<li className="menu-mobile-three">Menu 3</li>
						</ul>
					</div>
				</nav>
			)}
		</header>
	);
}

import React, { useState } from "react";
import "./NavBar.scss";
import { Squash as Hamburger } from "hamburger-react";

const NavBar = (props) => {
	const [navBar, setNavBar] = useState(false);

	const changeNavBar = () => {
		if (window.scrollY >= 20) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};

	window.addEventListener("scroll", changeNavBar);

	const menuOptions = [
		{
			ref: "#about", // Mouse page
			name: "CD3",
            target: "_self"
		},
		{
			ref: "#projects", // About us
			name: "About",
            target: "_self"
		},
		{
			ref: "#projects", // Open box on website
			name: "Cart",
            target: "_self"
		},
		{
			ref: "#contact", // Contact Part
			name: "Contact",
            target: "_self"
		},

	];

	return (
		<>
			<div className={navBar ? "Navigation scroll" : "Navigation"}>
				<div className="Icon">
					<a href="#home"> Juvele </a>
				</div>
				<div className="Options">
                    <div className="compact">
                        <Hamburger
                            toggled={props.menu}
                            onToggle={() => props.showMenu()}
                        />
                    </div>
                    {menuOptions.map((option) => (
                        <a href={option.ref} target={option.target}>{option.name}</a>
                    ))}
				</div>
			</div>
		</>
	);
};

export default NavBar;

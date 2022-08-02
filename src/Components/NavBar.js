import React, { useState } from "react";
import "./NavBar.scss";
import { Squash as Hamburger } from "hamburger-react";
import { closeContactForm } from "./ContactForm";

const openCart = () => {
    var cart = document.getElementById("cart");
    cart.style.width = "300px";
    var header = document.getElementById("header");
    header.style.marginRight = "300px";
}

const closeCart = () => {
    var cart = document.getElementById("cart");
    cart.style.width = "0px";
    var header = document.getElementById("header");
    header.style.marginRight = "0px";
}

const NavBar = (props) => {
	const [navBar, setNavBar]     = useState(false);
    const [showCart, setShowCart] = useState(false);

	const changeNavBar = () => {
		if (window.scrollY >= 20) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};
    window.addEventListener("scroll", changeNavBar);

    const toggleCart = () => {
        if (showCart) {
            closeCart();
        } else {
            openCart();
        }
        setShowCart(!showCart);
    };

    const homeTrigger = () => {
        closeCart();
        setShowCart(false);
        closeContactForm();
    }

    const openContactForm = () => {
        var contact = document.getElementById("contactPage");
        contact.style.display = "flex";
    }

	const menuOptions = [
		{
			ref: "#CD3", // Mouse page
			name: "CD3",
            target: "_self"
		},
		{
			ref: "#about", // About us
			name: "About",
            target: "_self"
		},
	];

	return (
		<>
			<div className={navBar ? "Navigation scroll" : "Navigation"}>
				<div className="Icon">
					<a href="#home" onClick={homeTrigger}> Juvele </a>
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
                        <a href="javascript:void(0);" target="_self" onClick={openContactForm}>Contact</a>
                        <a href="javascript:void(0);" target="_self" onClick={toggleCart}>Cart (0)</a>
				</div>
			</div>
		</>
	);
};

export default NavBar;
export { closeCart };
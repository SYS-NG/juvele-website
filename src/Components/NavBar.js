import React, { useState } from "react";
import "./NavBar.scss";
import { Squash as Hamburger } from "hamburger-react";
import { closeContactForm } from "./ContactForm";
import { closeC3D } from "./C3D";

const closePages = () => {
    closeContactForm()
    closeC3D()
}

const openCart = () => {
    var cart = document.getElementById("cart");
    cart.style.width = "300px";
    var product = document.getElementById("productPage");
    product.style.width = "calc(100% - 300px)"
    closePages();
}

const closeCart = () => {
    var cart = document.getElementById("cart");
    cart.style.width = "0px";
    var product = document.getElementById("productPage");
    product.style.width = "100%"
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

    const CLOSE_CART = () => {
        closeCart();
        setShowCart(false);
    }

    const homeTrigger = () => {
        CLOSE_CART();
        closePages();
    }

    const openContactForm = () => {
        var contact = document.getElementById("contactPage");
        contact.style.display = "flex";
        contact.style.zIndex = "6";
        closeC3D();
        CLOSE_CART();
    }

    const openC3D = () => {
        var product = document.getElementById("productPage");
        product.style.display = "flex";
        product.style.zIndex = "6";
        closeContactForm();
        CLOSE_CART();
    }

	return (
		<>
			<div className={navBar ? "Navigation scroll" : "Navigation"}>
				<div className="Icon">
					<a href="#home" onClick={homeTrigger}> Juvele </a>
				</div>
				<div className="Options">
                    <div className="compact">
                        <Hamburger
                            toggled={props.showMenu}
                            onToggle={() => props.toggleMenu()}
                        />
                        <div className={props.showMenu ? "Drawer" : "Hide"}>
                            <div className="Tile">
                                <a href="#home" target="_self" onClick={homeTrigger}>Home</a>
                            </div>
                            <div className="Tile">
                                <a href="javascript:void(0);" target="_self" onClick={openC3D}>C3D</a>
                            </div>
                            <div className="Tile">
                                <a href="javascript:void(0);" target="_self" onClick={openContactForm}>Contact</a>
                            </div>
                            <div className="Tile">
                            <a href="javascript:void(0);" target="_self" onClick={toggleCart}>Cart (0)</a>
                            </div>
                        </div>
                    </div>

                    <a href="#home" target="_self" onClick={homeTrigger}>Home</a>
                    <a href="javascript:void(0);" target="_self" onClick={openC3D}>C3D</a>
                    <a href="javascript:void(0);" target="_self" onClick={openContactForm}>Contact</a>
                    <a href="javascript:void(0);" target="_self" onClick={toggleCart}>Cart (0)</a>

                </div>
			</div>
		</>
	);
};

export default NavBar;
export { closeCart };
import React from "react";
import "./C3D.scss";
import { IoCloseOutline } from 'react-icons/io5';
import { Row, Container } from 'react-bootstrap'
import Button from "./Button"
import { ButtonThemes, ButtonTypes, ButtonSizes } from "./buttonTypes";

const closeC3D = () => {
    var product = document.getElementById("productPage");
    product.style.display = "none";
}

const C3D = () => {
	return (
        <div className="ProductPage" id="productPage">
            <div className="ProductContent">
                <div className="Head">
                        <h1>C3D</h1>
                        <a href="javascript:void(0);" target="_self" onClick={closeC3D}><IoCloseOutline size={45} color="black"/></a>
                </div>
                <h2>$129.99 CAD</h2>
                <p>Our mouse measures in at 117x61x37 mm, making it small! The design is unique with a strong extrusion on the side to provide grip for a claw-style grip and a smooth hump for improved palm grip. Alongside the PMW 3389 sensor inside!! </p>
           
                <Button
                            size={ButtonSizes.LARGE}
                            label="SOLD OUT"
                            onClickHandler={() => {}}
                            type={ButtonTypes.SECONDARY}
                            theme={ButtonThemes.LIGHT}
                            disabled={true}
                />
            </div>
        </div>
	);
};

export default C3D;
export { closeC3D };
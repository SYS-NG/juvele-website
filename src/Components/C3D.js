import React from "react";
import "./C3D.scss";
import MousePhoto from "./Images/C3D_render.JPG";
import Typed from "react-typed";
import { mouseDescriptions } from "./Assets";
import { Row, Container } from 'react-bootstrap'
import Button from "./Button"
import { ButtonThemes, ButtonTypes, ButtonSizes } from "./buttonTypes";

const closeC3D = () => {
    var product = document.getElementById("productPage");
    product.style.display = "none";
    product.style.zIndex = "-1";
}

const C3D = () => {
	return (
        <div className="ProductPage" id="productPage">
            <img src={MousePhoto} alt=""/>
            <div className="productDescription">
                <Row>
                    <h1>C3D</h1>
                    <h2>$129.99 CAD</h2>
                </Row>
                <p>Ultra light at 4.7g</p>
                <p>Powerful 11.6mm speaker driver</p>
                <p>Sound by Teenage Engineering</p>
                <p>Active Noise Cancellation</p>
                <p>Up to 34 hours of listening</p>
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
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
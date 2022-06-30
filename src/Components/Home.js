import React from "react";
import "./Home.scss";
import MousePhoto from "./Images/C3D_render.JPG";
import Typed from "react-typed";
import { mouseDescriptions } from "./Assets";
import { Row, Container } from 'react-bootstrap'
import Button from "./Button"
import { ButtonThemes, ButtonTypes, ButtonSizes } from "./buttonTypes";

const Home = () => {
	return (
        <Container fluid>
            <Row>
                <div className="Home position-relative">
                    <img src={MousePhoto} alt=""/>
                    <div className="description fadeInTop">
                        <p>Experience the&nbsp;
                            <Typed
                                strings={mouseDescriptions}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />

                            <br/>Distinct design with authentic
                            <br/>carbon fiber and innovative engineering
                        </p>
                        <Button
                            size={ButtonSizes.LARGE}
                            label="LEARN MORE"
                            onClickHandler={() => {window.location.href='#contents'}}
                            type={ButtonTypes.SECONDARY}
                            theme={ButtonThemes.LIGHT}
                        />
                    </div>
                </div>
            </Row>
        </Container>
	);
};

export default Home;
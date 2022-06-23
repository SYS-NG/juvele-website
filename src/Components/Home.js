import React from "react";
import "./Home.scss";
import MousePhoto from "./Images/C3D_render.JPG";
import Typed from "react-typed";
import { mouseDescriptions } from "./Contents";
import { Row, Container } from 'react-bootstrap'

const Home = () => {
	return (
        <Container fluid>
            <Row>
                <div className="Home">
                    <div className="descriptionAndPhoto">
                        <div className="Image">
                            <img src={MousePhoto} alt=""/>
                            <div className="description fadeInTop">
                                <p>Experience the&nbsp;
                                    <Typed
                                        strings={mouseDescriptions}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        loop
                                    />

                                    <br/>C3D.Distinct design with authentic
                                    <br/>carbon fiber and innovative engineering
                                </p>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">BUY NOW</a>
                            </div>
                        </div>

                    </div>
                </div>
            </Row>
        </Container>
	);
};

export default Home;
import React from "react";
import "./ProfileCard.scss";
import { Row, Col } from 'react-bootstrap'

const ProjectCard = (props) => {

	return (
        <div className="ProfileCard">
            <Row className="intro">
                <div className="profileImage col-xl-6 col-lg-6 col-md-6">
                    <img src={props.headshot} alt=""/>
                </div>
                <div className="profileIntro col-xl-6 col-lg-6 col-md-6">
                    <p> {props.name} </p>
                </div>
            </Row>
            <div className="projectDescription">
                <h2> {props.name} </h2>
                <p>{props.description} </p>
            </div>
        </div>
	);
};

export default ProjectCard;



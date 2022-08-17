import React from "react";
import "./ProfileCard.scss";
import { Col } from 'react-bootstrap'
import { githubLogo, linkedinLogo, emailLogo } from "./Assets";

const ProjectCard = (props) => {

	return (
        <Col className="ProfileCard">
            <div className="intro">
                <div className="profileImage">
                    <img src={props.headshot} alt=""/>
                </div>
                <div className="details">

                    <h4> {props.name} </h4>
                    <p> {props.position} </p>
                    <p> {props.profession} </p>

                    <div className="contactLinks">
                        <a href={props.linkedIn}>
                            {linkedinLogo()}
                        </a>
                        <a href={props.github} target="_blank" rel="noreferrer">
                            {githubLogo()}
                        </a>
                        <a href={props.email} target="_blank" rel="noreferrer">
                            {emailLogo()}
                        </a>
                    </div>
                </div>
            </div>
            <div className="description">
                <p>{props.description} </p>
            </div>
        </Col>
	);
};

export default ProjectCard;



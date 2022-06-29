import React from "react";
import "./ContentCard.scss";

const ProjectCard = (props) => {

	return (
        <div className="ContentCard">
            <div className="projectImage">
                <img src={props.logo} alt=""/>
            </div>
            <div className="projectDescription">
                <h2> {props.name} </h2>
                <p>{props.description} </p>
            </div>
        </div>
	);
};

export default ProjectCard;



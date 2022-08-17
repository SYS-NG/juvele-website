import React from "react";
import "./About.scss"
import { IoCloseOutline } from 'react-icons/io5';

const closeAbout = () => {
    var about = document.getElementById("aboutPage");
    about.style.display = "none";
}

const About = () => {

	return (
        <div className="AboutPage" id="aboutPage">
            <div className="AboutContent">
                <div className="Head">
                        <h1>Our Team</h1>
                        <a href="javascript:void(0);" target="_self" onClick={closeAbout}><IoCloseOutline size={45} color="black"/></a>
                </div>
            </div>
        </div>

	);
};

export default About;
export { closeAbout };
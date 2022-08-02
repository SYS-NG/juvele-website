import React from "react";
import "./ContactForm.scss"
import { IoCloseOutline } from 'react-icons/io5';

const closeContactForm = () => {
    var contact = document.getElementById("contactPage");
    contact.style.display = "none";
}

const ContactForm = () => {

	return (
        <div className="ContactPage" id="contactPage">
            <div className="ContactForm">
                <form action="mailto:szeyungng@gmail.com" method="post" enctype="text/plain" className="form">
                    <div className="Head">
                        <h1>Get in touch</h1>
                        <a href="javascript:void(0);" target="_self" onClick={closeContactForm}><IoCloseOutline size={45} color="black"/></a>
                    </div>
                    <input type="name" id="name" name="name" placeholder="Name"></input>
                    <input type="email" id="email" name="email" placeholder="Email"></input>
                    <textarea name="message" maxLength="1000" placeholder="Message"></textarea>
                    <input type="submit" name="submit" value="Submit"></input>
                </form>
            </div>
        </div>

	);
};

export default ContactForm;
export { closeContactForm };

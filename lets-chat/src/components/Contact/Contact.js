
import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <div id="contact-title">
                    <h1>Contact</h1>
                </div>
                <div id ="contact-image-holder">
                </div>
                <div id = "bg-text">
                    <h3>I am Chris Jonathan</h3>
                    <p>And I'm a Full Stack Developer</p>
                    <a href="https://github.com/ChrisJonathan22"><i className="fab fa-github"> ChrisJonathan22</i></a>
                </div>
            </div>
        );
    }
}
export default Contact;
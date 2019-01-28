import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div id="about-title">
                    <h1>About</h1>
                </div>
                <div id = "container">
                    <p>This is a chat application.</p>
                </div>
            </div>
        );
    }
}

export default About;
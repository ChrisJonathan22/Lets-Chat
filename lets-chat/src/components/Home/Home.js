import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "Chris"
        };
    }
    
    render() {
        return (
            <div>
                <div id='title'>
                    <h1>Welcome to my Recipe App</h1>
                </div>
                <div id = 'img-holder'>
                    <p>Hey there! Let's chat!</p>
                </div>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("Clicked!");
    }

    render() {
        return (
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <div className="header-name-wrapper">
                    <h1 className="header-name">Jacob Zuo</h1>
                </div>
                <div className="header-button-wrapper">
                    <button className="header-button" onClick={this.handleClick}>
                        Hello Jacob!
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
import React from "react";
import './Style.css'

const logo = require('./assets/logo192.png')

function NavBar(){
    return(
        <div>
            <nav className="nav_bar">
                <div className="logo">
                        <img src={logo} alt="react-logo"></img>
                    <span>ACCT - React</span>
                </div>
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
        </div>

    );
}

export default NavBar;
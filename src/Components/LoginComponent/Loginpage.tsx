import React from 'react'

import './LoginPage.css';

export const Loginpage = () => {
    return(
        <div className="Login">
            <div className="LoginBox">
                <div className="LoginHeader">Log In</div>
                <div className="inputs">
                    <input className="username" placeholder="Enter Username"/>
                    <input className="password" placeholder="Enter Password"/>
                </div>
                <div>
                    <button className="register">Register</button>
                    <button className="loginbutton">Log In</button>
                </div> 
            </div>
        </div>
    )
}


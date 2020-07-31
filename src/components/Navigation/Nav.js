import React from 'react';
import { NavLink } from 'react-router-dom'
import Cookie from "js-cookie";
import { navigate } from "hookrouter";
import '../../styles/Nav.css'

const username = Cookie.get("username");
export default function Nav() {
    
    const handleLogout = () => {
        Cookie.remove("username");
        Cookie.remove("password");
         navigate("/");
    };

    let loggedIn = true;

    return (
        <div className="navbar-wrapper">
            <div className="navbar-logo">
                <h1>Entanglement</h1>
            </div>

            <div className="navbar-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/sign-in'>Sign In</NavLink>
                <NavLink to='/sign-up'>Sign Up</NavLink>
            </div>
 
            <div>
                <p>Hello, {username}</p>
                <input type="submit" onClick={handleLogout} value="Logout" />
            </div>


            <div className="username-text-wrapper">
                <h3>{loggedIn ? "Terry Roberts" : null}</h3>
            </div>
        </div >
    )
} 
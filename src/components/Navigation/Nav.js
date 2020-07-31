import React from 'react';
import { NavLink } from 'react-router-dom'
import Cookie from "js-cookie";
import { navigate } from "hookrouter";
import '../../styles/Nav.css'
import tree from '../../images/tree.jpg'

const username = Cookie.get("username");
export default function Nav() {
    
    const handleLogout = () => {
        Cookie.remove("username");
        Cookie.remove("password");
         navigate("/");
    };

    return (
        <div className="navbar-wrapper">
            <div className="navbar-logo">
                <img src={tree} alt="logo" />
            </div>

            <div className="navbar-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/'>Sign In</NavLink>
                <NavLink to='/sign-up'>Sign Up</NavLink>
            </div>
 
            <div>
                <p>Hello, {username}</p>
                <input type="submit" onClick={handleLogout} value="Logout" />
            </div>


            {/* ADD USERNAME IN DIV */}
        </div >
    )
}
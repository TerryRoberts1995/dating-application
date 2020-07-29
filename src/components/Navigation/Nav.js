import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../styles/Nav.css'
import tree from '../../images/tree.jpg'

export default function Nav() {
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

            {/* ADD USERNAME IN DIV */}
        </div >
    )
}
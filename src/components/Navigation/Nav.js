import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../styles/Nav.css'

export default function Nav() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-logo">
                <h1>Entanglement</h1>
            </div>

            <div className="navbar-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/'>Sign In</NavLink>
                <NavLink to='/sign-up'>Sign Up</NavLink>
            </div>

            <div className="username-text-wrapper">
                <h3>%Username%</h3>
            </div>
        </div >
    )
} 
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar () {
    return(
        <section className="navbar">
            <Link to="/home" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/portfolio" className="navbar-item">Portfolio</Link>
        </section>
    )
}

export default Navbar;
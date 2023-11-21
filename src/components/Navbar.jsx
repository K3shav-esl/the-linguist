import React from 'react'
import "../styles/main.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <header>
                <div class="navbar">
                    <div class="nav-title">
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }} >

                            The Linguist
                        </Link>
                    </div>
                    <div class="nav-list">
                        <ul>
                            <li>

                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/home"> Dashboard</Link></li>
                            <li>
                                <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}> About Us</Link></li>
                            <li>
                                <Link to="/course" style={{ textDecoration: 'none', color: 'inherit' }}> Courses</Link></li>
                            <li>
                                <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}> Contact Us</Link></li>

                        </ul>
                    </div>
                </div>
                <div class="hero"></div>

            </header>
        </div>
    )
}

export default Navbar
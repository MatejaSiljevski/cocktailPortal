import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo.svg'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <img src={Logo} className='logo' alt="" />
                </Link>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar

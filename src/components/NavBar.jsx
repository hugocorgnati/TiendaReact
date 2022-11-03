import React from 'react'
import logo from '../assets/img/logo.png'
import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom"
import navBar from "../style/navBar.css"



const NavBar = () => {

    const links = ["Obras", "Objetos"]

    return (
        <header className='navbar'>
            <Link to="/">
                <img src={logo} className='navbarLogo' alt='logo' />
            </Link>
            <div className="navbarNav">
                {links.map((link) => {
                    return (
                        <NavLink
                            className={({ isActive }) => (isActive ? "navbarLink navbarLinkActive" : "navbarLink")}
                            to={`/category/${link.toLowerCase()}`}
                            key={link}
                        >
                            {link}
                        </NavLink>
                    )
                })}
            </div>
            <div className='headerButtons'>
                <Link to="/cart"><CartWidget /></Link>
            </div>
        </header>
    )
}

export default NavBar
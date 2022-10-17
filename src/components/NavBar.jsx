import React from 'react'
import logo from '../assets/img/logo.png'
import CartWidget from './CartWidget'
import navBar from '../style/navBar.css'


const NavBar = () => {
    return (
        <header className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <img src={logo} className='navbar-logo' alt='logo' />
                <div class="menuOptions">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'><a href="#">Obras</a></li>
                        <li className='nav-item'><a href="#">Objetos</a></li>
                    </ul>
                </div>
                <div className='header__buttons'>
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default NavBar
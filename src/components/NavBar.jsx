import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div class="navBarContainer">
            <a class="navBar-brand" href="#">Navbar</a>
            <ul class="navBar-options">
                <li class="navBar-item">
                    <a class="navBar-link" href="#">Opcion-01</a>
                </li>
                <li class="navBar-item">
                    <a class="navBar-link" href="#">Opcion-02</a>
                </li>
                <li class="navBar-item">
                    <a class="navBar-link" href="#">Opcion-03</a>
                </li>
                <li class="navBar-item">
                    <a class="navBar-link" href="#">Opcion-04</a>
                </li>
                <li class="navBar-item">
                    <CartWidget />
                </li>
            </ul>
        </div>
    )
}

export default NavBar
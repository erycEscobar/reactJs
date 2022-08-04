import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navBarContainer">
            <a className="navBar-brand" href="#">TodaviaNoHayLogo.</a>
            <ul className="navBar-options">
                <li className="navBar-item">
                    <a className="navBar-link" href="#">Opcion-01</a>
                </li>
                <li className="navBar-item">
                    <a className="navBar-link" href="#">Opcion-02</a>
                </li>
                <li className="navBar-item">
                    <a className="navBar-link" href="#">Opcion-03</a>
                </li>
                <li className="navBar-item">
                    <a className="navBar-link" href="#">Opcion-04</a>
                </li>
                <li className="navBar-item">
                    <CartWidget />
                </li>
            </ul>
        </div>
    )
}

export default NavBar
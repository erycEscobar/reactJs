import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <div className="navBarContainer">
            <NavLink className="navBar-brand" to='/'>TodaviaNoHayLogo.</NavLink>
            <ul className="navBar-options">
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/'>
                        <img src="../../../src/Assets/round-account-button-with-user-inside.png" alt="" />
                    </NavLink>
                </li>
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/'>
                        <img src="../../../src/Assets/home-button.png" alt="" /> 
                    </NavLink>
                </li>
                <li className="navBar-item">
                    <CartWidget />
                </li>
            </ul>
        </div>
        <div className="navBarContainer">
            <ul className="navBar-options">
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/category/celulares'>
                        celulares
                    </NavLink>
                </li>
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/category/tablets'>
                        tablets
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavBar;
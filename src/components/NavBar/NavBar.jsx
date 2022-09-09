import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

/* <img src="../../../src/Assets/home-button.png" alt="" /> */

const NavBar = () => {
    return (
        <>
        <div className="navBarContainer">
            <NavLink className="navBar-brand" to='/'>coderTechStore</NavLink>
            <ul className="navBar-options">
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/'>
                        <i className="fi fi-rs-home"></i>
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
                    <NavLink className="navBar-link" to='/category/cellphone'>
                        celulares
                    </NavLink>
                </li>
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/category/tablet'>
                        tablets
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavBar;
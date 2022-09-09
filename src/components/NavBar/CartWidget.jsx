import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../CartContext";

/* <img src="../../../src/Assets/shopping-cart.png" alt="" /> */

const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return (
        <NavLink className="navBar-link" to='/cart'>

            <i className="fi fi-rs-shopping-cart"></i>
            <span className="totalCartWidget">{totalProducts() || ''}</span>
        </NavLink>
    )
}

export default CartWidget
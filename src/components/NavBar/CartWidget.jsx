import React from "react";
import { NavLink } from "react-router-dom";


const CartWidget = () => {
    return (
        <NavLink className="navBar-link" to='/cart'>
            <img src="../../../src/Assets/shopping-cart.png" alt="" />
        </NavLink>
    )
}

export default CartWidget
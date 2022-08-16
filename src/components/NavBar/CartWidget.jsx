import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../CartContext";

const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return (
        <NavLink className="navBar-link" to='/cart'>
            <img src="../../../src/Assets/shopping-cart.png" alt="" />
            <span>{totalProducts() || ''}</span>
        </NavLink>
    )
}

export default CartWidget
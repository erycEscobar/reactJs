import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";
import CartItem from "./CartItem";


const CartContainer = () => {
    const { cart, totalPrice } = useCartContext(); 

    if (cart.length === 0) {
        return (
            <>
                <p>El carrito esta vacio</p>
                <Link to='/'>Ver nuestro catalogo</Link>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <CartItem key={product.id} product={product}/>)
            }
            <p>
                TOTAL: ${totalPrice()}
            </p>

            <Link to="/checkout">FINALIZAR COMPRA</Link>
        </>
    )
}

export default CartContainer
import React from "react";
import { useCartContext } from "../CartContext";

const CartItem = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart">
            <img src={product.img} alt={product.modelo} />
            <div>
                <p>Unidades: {product.quantity}</p>
                <p>Precio por unidad: {product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar del carrito</button>
            </div>
        </div>
    )

}

export default CartItem;
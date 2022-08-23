import React from "react";
import { useCartContext } from "../CartContext";

const CartItem = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart">
            <img src={product.img} alt={product.model} />
            <div>
                <p>Producto: {product.model}</p>
                <p>Unidades: {product.quantity}</p>
                <p>Precio por unidad: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar del carrito</button>
            </div>
        </div>
    )

}

export default CartItem;
import React, { useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";

const Checkout = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ tel, setTel ] = useState("");

    const [ checkoutDone, setCheckoutDone ] = useState(false);
    const { cart, totalPrice } = useCartContext(); 

    const order = {
        buyer: {
            name: name,
            email: email,
            phone: tel,
        },
        items: cart.map(product => ({ 
            id: product.id, 
            model: product.model, 
            price: product.price,
            quantity: product.quantity
        })),
        total: totalPrice(),
    }
    
    const handleCompra = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => alert(`Muchas gracias ${name}, su codigo de compra es ${id}`));
        setCheckoutDone(true);
    }

    if (checkoutDone) {
        return (
            <>
                <h1>GRACIAS POR SU COMPRA {name}</h1>
                <Link to="/">Volver</Link>
            </>
        )
    }

    return (
        <div>
            <h2>Ingrese sus datos para terminar su compra</h2>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="tel" onChange={(e) => setTel(e.target.value)}/>
            <button onClick={handleCompra}>FINALIZAR COMPRA</button>
        </div>
    )
}

export default Checkout
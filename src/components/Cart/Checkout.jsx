import React, { useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";
import './Checkout.css';

const Checkout = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ tel, setTel ] = useState("");

    const [ checkoutDone, setCheckoutDone ] = useState(false);
    const { cart, totalPrice, clearCart } = useCartContext(); 

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
            .then(({ id }) => swal(`Muchas gracias ${name}`, `su codigo de compra es ${id}`, "success"));
        setCheckoutDone(true);
        clearCart();
    }

    if (checkoutDone) {
        return (
            <>
                <h1>GRACIAS POR SU COMPRA {name}</h1>
                <Link to="/">
                    <button>
                        Volver Al Catalogo
                    </button>
                </Link>
            </>
        )
    }

    return (
        <div className="checkout">
            <h2>Ingrese sus datos para terminar su compra</h2>
            <p>
                Nombre : 
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </p>
            <p>
                eMail :
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </p>
            <p>
                Telefono : 
                <input type="tel" onChange={(e) => setTel(e.target.value)}/>
            </p>
            <br />
            <button onClick={handleCompra}>FINALIZAR COMPRA</button>
            <br />
            <Link to="/">
                <button>
                    Volver Al Catalogo
                </button>
            </Link>
            <Link to="/cart">
                <button>
                    Volver Al Carrito
                </button>
            </Link>
        </div>
    )
}

export default Checkout
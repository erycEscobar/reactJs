import React, { useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";
import './Checkout.css';
import Loader from "../Loader";

const Checkout = () => {

    const [ checkoutDone, setCheckoutDone ] = useState(false);
    const { cart, totalPrice, clearCart } = useCartContext(); 
    const [ loader, setLoader ] = useState(false);
    const [ form, setForm ] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const order = {
        buyer: {
            name: form.nombre,
            email: form.email,
            phone: form.telefono,
        },
        items: cart.map(product => ({ 
            id: product.id, 
            model: product.model, 
            price: product.price,
            quantity: product.quantity
        })),
        total: totalPrice(),
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setLoader(true);
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                swal(`Muchas gracias ${form.nombre}`, `su codigo de compra es ${id}`, "success")
                setLoader(false);
                clearCart();
                setCheckoutDone(true);
            });

    }

    if (loader) {
        return (<Loader />)
    }

    if (checkoutDone) {
        return (
            <>
                <h1>GRACIAS POR SU COMPRA {form.nombre}</h1>
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
            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre">
                    Ingrese su nombre
                </label>
                <input 
                    type="text" 
                    id='nombre' 
                    name='nombre' 
                    value={form.nombre || ''} 
                    onChange={handleChange} 
                />

                <br />

                <label htmlFor="email">
                    Ingrese su email : 
                </label>
                <input 
                    type="email" 
                    id='email' 
                    name='email' 
                    value={form.email || ''} 
                    onChange={handleChange} 
                />

                <br />

                <label htmlFor="telefono">
                    Ingrese su numero de telefono : 
                </label>
                <input 
                    type="tel" 
                    id='telefono' 
                    name='telefono' 
                    value={form.telefono || ''} 
                    onChange={handleChange} 
                />

                <br />

                <button type="submit">FINALIZAR COMPRA</button>

            </form>
            
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
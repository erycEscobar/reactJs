import React, { useState } from "react";
import FinalizarCompra from "./FinalizarCompra";
import ItemCount from "./ItemCount";
import { useCartContext } from "../CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (unitsOf) => {
        swal("Muy Bien!", `Se agregaron ${unitsOf} productos al carrito`, "success");
        setFinalizarCompra(true);
        addProduct(data, unitsOf);
        data.stock = data.stock - unitsOf;
    }

    return (
        <>
        <div className="itemDetailContainer">
            <img src={data.img} alt="" className="itemDetailImage" />
            <div className="itemDetail">
                <h3>{data.brand}</h3>
                <h4>{data.model}</h4>
                <p>{data.description}</p>
                <h5>stock disponible: {data.stock} unidades</h5>
                <h6>{data.price}</h6>
                {
                    finalizarCompra
                        ? <FinalizarCompra />
                        : <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
                }
                <Link to='/'>
                    <button>Volver al catalogo</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
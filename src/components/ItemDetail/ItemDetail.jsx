import React, { useState } from "react";
import FinalizarCompra from "./FinalizarCompra";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const [addToCart, setAddToCart] = useState(0);

    const onAdd = (unitsOf) => {
        alert(`Se agregaron ${unitsOf} productos al carrito`);
        setAddToCart(unitsOf);
        setFinalizarCompra(true);
    }

    return (
        <>
        <div className="itemDetailContainer">
            <img src={data.img} alt="" className="itemDetailImage" />
            <div className="itemDetail">
                <h3>{data.marca}</h3>
                <h4>{data.modelo}</h4>
                <p>{data.descripcion}</p>
                <h5>stock disponible: {data.stock} unidades</h5>
                <h6>{data.precio}</h6>
                {
                    finalizarCompra
                        ? <FinalizarCompra />
                        : <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
                }
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
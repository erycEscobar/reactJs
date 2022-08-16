import React, { useState } from "react";
import FinalizarCompra from "./FinalizarCompra";
import ItemCount from "./ItemCount";
import { useCartContext } from "../CartContext";

const ItemDetail = ({ data }) => {
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (unitsOf) => {
        alert(`Se agregaron ${unitsOf} productos al carrito`);
        setFinalizarCompra(true);
        addProduct(data, unitsOf);
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
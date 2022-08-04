import React from "react";

const ItemDetail = ({ data }) => {
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
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
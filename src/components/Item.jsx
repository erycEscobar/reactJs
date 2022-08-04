import React from "react";
import ItemCount from "./ItemCount";

const Item = ({info}) => {

    const onAdd = (unitsOf) => {
        alert(`Se agregaron ${unitsOf} productos al carrito`);
    }

    return (
        <>
            <li className="cardItem-Container">
                <a className="item-Link" href="#">
                    {info.modelo}
                    <img src={info.img} alt="" />
                
                </a>
                <ItemCount stock={info.stock} initial={1} onAdd={onAdd}/>
            </li>
        </>
    )

}

export default Item
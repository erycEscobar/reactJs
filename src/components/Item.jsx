import React from "react";
import ItemCount from "./ItemCount";

const Item = ({prop}) => {

    const onAdd = (unitsOf) => {
        alert(`Se agregaron ${unitsOf} productos al carrito`);
    }

    return (
        <>
            <li class="cardItem-Container">
                <a class="item-Link" href="#">{prop}</a>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </li>
        </>
    )

}

export default Item
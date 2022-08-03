import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({prop}) => {

    const onAdd = (unitsOf) => {
        alert(`Se agregaron ${unitsOf} productos al carrito`);
    }

    return (
        <div class="itemList-Container">
            <ul class="cardItem-List">
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer
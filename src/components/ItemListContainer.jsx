import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({prop}) => {
    return (
        <div class="itemList-Container">
            <ul class="cardItem-List">
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                    <ItemCount stock={5} initial={1}/>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                    <ItemCount stock={5} initial={1}/>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                    <ItemCount stock={5} initial={1}/>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                    <ItemCount stock={5} initial={1}/>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer
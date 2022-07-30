import React from "react";

const ItemListContainer = ({prop}) => {
    return (
        <div class="itemList-Container">
            <ul class="cardItem-List">
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                </li>
                <li class="cardItem-Container">
                    <a class="item-Link" href="#">{prop}</a>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer
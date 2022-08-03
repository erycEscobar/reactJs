import React from "react";
import Item from "./Item";

const ItemList = ({prop}) => {

    return (
        <>
            <ul class="cardItem-List">
                <Item prop={prop}/>
                <Item prop={prop}/>
                <Item prop={prop}/>
                <Item prop={prop}/>
            </ul>
        </>

    )

}

export default ItemList
import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({prop}) => {

    return (
        <>
            <div class="itemList-Container">
                <ItemList prop={prop}/>
            </div>
        </>
    )

}

export default ItemListContainer
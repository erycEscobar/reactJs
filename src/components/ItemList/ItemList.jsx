import React from "react";
import Item from "./Item";

const ItemList = ({data=[]}) => {

    return (
        data.map(mostrarProductos => <Item key={mostrarProductos.id} info={mostrarProductos} />)
    )

}

export default ItemList
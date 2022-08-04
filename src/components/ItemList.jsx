import React from "react";
import Item from "./Item";

const ItemList = ({data=[]}) => {

    return (
        //<ul className="cardItem-List"> 
            data.map(mostrarProductos => <Item key={mostrarProductos.id} info={mostrarProductos} />)
        //</ul>
    )

}

export default ItemList
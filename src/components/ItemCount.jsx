import React, { useState } from "react";

const ItemCount = ({stock, initial}) => {
    const [unitCounter, setUnitCounter] = useState(initial);
    
    const sumarUnidad = () => {
        if (unitCounter < stock) {
            setUnitCounter(unitCounter + 1);
        }
    }

    const restarUnidad = () => {
        if (unitCounter > 0) {
            setUnitCounter(unitCounter - 1);
        }
    }


    return (
        <div class="itemCountContainer">
            <div class="counter">
                <button onClick={restarUnidad}>-</button>
                <p>{unitCounter}</p>
                <button onClick={sumarUnidad}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount


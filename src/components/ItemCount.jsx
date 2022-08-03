import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
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

    const add = () => {
        if (unitCounter != 0) {
            onAdd = unitCounter;
            console.log(unitCounter);
            setUnitCounter(unitCounter - unitCounter);

        }
    }


    return (
        <div class="itemCountContainer">
            <div class="counter">
                <button onClick={restarUnidad}>-</button>
                <p>{unitCounter}</p>
                <button onClick={sumarUnidad}>+</button>
            </div>
            <button onClick={add}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount


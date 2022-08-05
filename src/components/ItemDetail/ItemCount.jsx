import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [unitCounter, setUnitCounter] = useState(initial);
    
    const handleSumarUnidad = () => {
        setUnitCounter(unitCounter + 1);
    }

    const handleRestarUnidad = () => {
        setUnitCounter(unitCounter - 1);
    }

    const handleAgregar = () => {
        onAdd(unitCounter);
        setUnitCounter(initial);
    }

    return (
        <div className="itemCountContainer">
            <div className="counter">
                <button disabled={unitCounter === 0} onClick={handleRestarUnidad}>-</button>
                <p>{unitCounter}</p>
                <button disabled={unitCounter === stock} onClick={handleSumarUnidad}>+</button>
            </div>
            <button disabled={unitCounter === 0} onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount


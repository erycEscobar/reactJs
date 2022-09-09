import React, { useState } from "react";
import { Link } from "react-router-dom";

const FinalizarCompra = () => {

    return (
        <div className="itemCountContainer">
            <Link to='/cart'>
                <button>Ir Al Carrito</button>
            </Link>
        </div>
    )
}

export default FinalizarCompra
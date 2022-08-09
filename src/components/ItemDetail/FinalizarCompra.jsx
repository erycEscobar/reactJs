import React, { useState } from "react";
import { Link } from "react-router-dom";

const FinalizarCompra = () => {

    return (
        <div className="itemCountContainer">
            <Link to='/cart'>
                <button>Finalizar su compra</button>
            </Link>
        </div>
    )
}

export default FinalizarCompra
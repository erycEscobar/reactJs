import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const producto = { 
    id: 1, 
    marca: "marca1", 
    modelo: "modelo1", 
    precio: 100000, 
    stock: 8, 
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptates voluptatibus labore quasi sed, perspiciatis vitae nihil veritatis dolorem itaque nemo commodi! Sequi laudantium repellendus, corporis inventore impedit quod nulla?", 
    img: "../Assets/img-celular.png" 
}

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 2000);
            
        });

        getData.then(res => setData(res));

    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;
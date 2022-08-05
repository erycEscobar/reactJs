import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const producto = [

    
    {id:1, modelo: "modelo1", marca: "marca1", stock: 9, descripcion: "esta descripcion es meramente descriptiva con el solo objetivo de intentar llenar este espacio vacio", category: "celulares", img: "../../../src/Assets/img-celular.png" },
    {id:2, modelo: "modelo2", marca: "marca2", stock: 2, descripcion: "esta descripcion es meramente descriptiva con el solo objetivo de intentar llenar este espacio vacio", category: "tablets", img: "../../../src/Assets/img-tablet.png" },
    {id:3, modelo: "modelo3", marca: "marca3", stock: 8, descripcion: "esta descripcion es meramente descriptiva con el solo objetivo de intentar llenar este espacio vacio", category: "tablets", img: "../../../src/Assets/img-tablet.png" },
    {id:4, modelo: "modelo4", marca: "marca4", stock: 5, descripcion: "esta descripcion es meramente descriptiva con el solo objetivo de intentar llenar este espacio vacio", category: "celulares", img: "../../../src/Assets/img-celular.png" },
    {id:5, modelo: "modelo5", marca: "marca5", stock: 9, descripcion: "esta descripcion es meramente descriptiva con el solo objetivo de intentar llenar este espacio vacio", category: "tablets", img: "../../../src/Assets/img-tablet.png" },
    {id:6, modelo: "modelo6", marca: "marca6", stock: 2, descripcion: "esta descripcion es meramente descriptiva con el solo objetivo de intentar llenar este espacio vacio", category: "celulares", img: "../../../src/Assets/img-celular.png" },
    {id:7, modelo: "modelo7", marca: "marca7", stock: 8, descripcion: "esta descripcion es meramente descriptiva con el solo objetivo de intentar llenar este espacio vacio", category: "celulares", img: "../../../src/Assets/img-celular.png" },
    {id:8, modelo: "modelo8", marca: "marca8", stock: 5, descripcion: "esta descripcion es meramente descriptiva con el solo objetivo de intentar llenar este espacio vacio", category: "tablets", img: "../../../src/Assets/img-tablet.png" },

] 

const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const {itemId} = useParams();

    useEffect(() => {
        
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 2000);
            
        });

        getData.then(res => setData(res.find(producto => producto.id === parseInt(itemId))));

    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;
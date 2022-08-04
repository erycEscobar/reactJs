import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const products = [
    {id:1, modelo: "modelo1", marca: "marca1", stock: 9, img: "../Assets/img-celular.png" },
    {id:2, modelo: "modelo2", marca: "marca2", stock: 2, img: "../Assets/img-celular.png" },
    {id:3, modelo: "modelo3", marca: "marca3", stock: 8, img: "../Assets/img-celular.png" },
    {id:4, modelo: "modelo4", marca: "marca4", stock: 5, img: "../Assets/img-celular.png" },
];

const ItemListContainer = ({prop}) => {

    const [data, setData] = useState([]);

    useEffect( () => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getData.then(res => setData(res));

    }, [])

    return (
        <>
            <div className="itemList-Container">
                <h2>{prop}</h2>
                <ul className="cardItem-List"> 
                    <ItemList data={data}/>
                </ul>
            </div>
        </>
    )

}

export default ItemListContainer
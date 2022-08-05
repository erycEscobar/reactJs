import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const products = [

    {id:1, modelo: "modelo1", marca: "marca1", stock: 9, category: "celulares", img: "../../../src/Assets/img-celular.png" },
    {id:2, modelo: "modelo2", marca: "marca2", stock: 2, category: "tablets", img: "../../../src/Assets/img-tablet.png" },
    {id:3, modelo: "modelo3", marca: "marca3", stock: 8, category: "tablets", img: "../../../src/Assets/img-tablet.png" },
    {id:4, modelo: "modelo4", marca: "marca4", stock: 5, category: "celulares", img: "../../../src/Assets/img-celular.png" },
    {id:5, modelo: "modelo5", marca: "marca5", stock: 9, category: "tablets", img: "../../../src/Assets/img-tablet.png" },
    {id:6, modelo: "modelo6", marca: "marca6", stock: 2, category: "celulares", img: "../../../src/Assets/img-celular.png" },
    {id:7, modelo: "modelo7", marca: "marca7", stock: 8, category: "celulares", img: "../../../src/Assets/img-celular.png" },
    {id:8, modelo: "modelo8", marca: "marca8", stock: 5, category: "tablets", img: "../../../src/Assets/img-tablet.png" },
    
];

const ItemListContainer = ({prop}) => {

    const [data, setData] = useState([]);
    const {categoryId} = useParams();

    useEffect( () => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        if (categoryId) {
            getData.then(res => setData(res.filter(products => products.category === categoryId)));
        } else {
            getData.then(res => setData(res));
        }

    }, [categoryId])

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
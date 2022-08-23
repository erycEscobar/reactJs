import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from "./ItemList";
import Loader from "../Loader";


const ItemListContainer = ({prop}) => {

    const [data, setData] = useState([]);
    const {categoryId} = useParams();
    const [loader, setLoader] = useState(false);

    useEffect( () => {
        const querydb = getFirestore();
        const queryCollection = collection (querydb, 'products');
        setLoader(true);

        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId));
            getDocs(queryFilter)
            .then(res => {
                setData(
                    res.docs.map(product => ({
                        id: product.id,
                        ...product.data()
                    }))
                )
                setLoader(false);
            })
        } else {
            getDocs(queryCollection)
            .then(res => {
                setData(
                    res.docs.map(product => ({
                        id: product.id,
                        ...product.data()
                    }))
                )
                setLoader(false);
            })
        }
        
    }, [categoryId])
    

    if (loader) {
        return (
            <Loader />
        )
    } else {
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

}

export default ItemListContainer
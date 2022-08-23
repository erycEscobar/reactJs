import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const {itemId} = useParams();

    const [loader, setLoader] = useState(false);

    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', itemId);
        setLoader(true);
        getDoc(queryDoc)
            .then( res => {
                setData({id: res.id, ...res.data()});
                setLoader(false);
            });
        
    }, [itemId])

    if (loader) {
        return (
            <Loader />
        )
    } else {
        return (
            <ItemDetail data={data} />
        );
    }
}

export default ItemDetailContainer;
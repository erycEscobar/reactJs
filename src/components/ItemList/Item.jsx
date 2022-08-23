import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Item = ({info}) => {
    return (
        <>
            <li className="cardItem-Container">
                <Link className="item-Link" to={`/item/${info.id}`}>
                    {info.model}
                    <img src={info.img} alt="" />       
                </Link>
            </li>
        </>
    )

}

export default Item
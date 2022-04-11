import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
const { productos } = require('../utils/productos');

const ItemDetailContainer=()=>{
    const [dato, setDato] = useState({})

    useEffect(()=>{
        customFetch(2000, productos[0])
            .then(result => setDato(result))
            .catch(err=>console.log(err))
    },[])

    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer

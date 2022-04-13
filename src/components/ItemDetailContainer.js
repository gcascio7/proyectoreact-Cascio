import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
const { productos } = require('../utils/productos');

const ItemDetailContainer=()=>{

    const {ID} = useParams();

    const [dato, setDato] = useState ([])
       
      useEffect (()=>{
          customFetch(2000, productos.find(item => item.id === parseInt(ID)))
              .then(result => setDato(result) )
              .catch(err => console.log(err)) 
    },[])
   

    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer

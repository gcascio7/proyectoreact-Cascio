import { useEffect, useState } from "react"
import ItemList from "./itemList";
import customFetch from "../utils/customFetch";
const {productos} = require('../utils/productos');

const ItemListContainer = () => {
 
    const [datos, setDatos] = useState ([])
       
      useEffect (()=>{
        customFetch(2000, productos)
            .then(result => setDatos(result) )
            .catch(err => console.log("err"))
    },[])
   

    
    return (
      <>
        <ItemList items={datos} />
        </>
    )
    }
    


    export default ItemListContainer;

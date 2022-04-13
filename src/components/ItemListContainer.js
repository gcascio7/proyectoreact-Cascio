import { useEffect, useState } from "react"
import ItemList from "./itemList";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
const {productos} = require('../utils/productos');

const ItemListContainer = () => {

    const {idCategory} = useParams();

    const [datos, setDatos] = useState ([])
       
      useEffect (()=>{
        if (idCategory==undefined){
        customFetch(2000, productos)
            .then(result => setDatos(result) )
            .catch(err => console.log("err"))
        }else{
          customFetch(2000, productos.filter(item => item.category == parseInt(idCategory)))
              .then(result => setDatos(result) )
              .catch(err => console.log("err"))
           }
        console.log(idCategory)
    },[idCategory])
   
    return (
      <>
        <ItemList items={datos} />
        </>
    )
    }
    
    export default ItemListContainer;

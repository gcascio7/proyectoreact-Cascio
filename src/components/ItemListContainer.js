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
    const[cantidad, setCantidad] = useState(1);
    
    const aumentar = () => {
        if (cantidad<5)
        setCantidad (cantidad+1)
    }

    const bajar = () => {
        if (cantidad>1)
        setCantidad (cantidad-1)
    }

    
    return (
      <>
        <ItemList items={datos} />
        <div className="contador">
            <button onClick={bajar}> - </button>
            <p className="nroContador">{cantidad}</p>
            <button onClick={aumentar}> + </button>
        </div>
        <div>
            Tenemos {cantidad} Items Listados
        </div>
        </>
    )
    }
    


    export default ItemListContainer;

import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd}) => {

        const[cantidad, setCantidad] = useState(0);
        
        useEffect(() => {
            setCantidad(initial)
        },[])

        const aumentar = () => {
            if (cantidad<stock)
            setCantidad (cantidad+1)
        }

        const bajar = () => {
            if (cantidad>initial)
            setCantidad (cantidad-1)
        }

        return (
           
                <div className="contador">
                    <button onClick={bajar}> - </button>
                    <p className="nroContador">{cantidad}</p>
                    <button onClick={aumentar}> + </button>
                    Tenemos {cantidad} Items Listados
                </div>
           
        )
}

export default ItemCount

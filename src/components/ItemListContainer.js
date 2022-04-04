import { useState } from "react";

const ItemListContainer = (props) => {
    
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
        <div>
            <button onClick={aumentar}> + </button>
            <p>{cantidad}</p>
            <button onClick={bajar}> - </button>
        </div>
        <div>
            Tenemos {cantidad} Items Listados
        </div>
        </>
    )
    }
    
export default ItemListContainer;
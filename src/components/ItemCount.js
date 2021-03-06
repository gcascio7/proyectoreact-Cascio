import { useEffect, useState} from "react";


const ItemCount = ({ stock = 0, initial, onAdd}) => {

        const[cantidad, setCantidad] = useState(0);
        
        useEffect((initial = 0) => {
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
           <div>
                <div className="contador">
                    <button onClick={bajar} className="btn btn-outline-secondary"> - </button>
                    <p className="nroContador">{cantidad}</p>
                    <button onClick={aumentar} className="btn btn-outline-secondary"> + </button>
                </div>
               
                  {
                      stock && cantidad
                      ? <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
                      : <button >Agregar al carrito</button>
                  }
           </div>

        )
}

export default ItemCount

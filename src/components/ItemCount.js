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
           <div>
                <div className="contador">
                    <button onClick={bajar} className="btn btn-outline-secondary"> - </button>
                    <p className="nroContador">{cantidad}</p>
                    <button onClick={aumentar} className="btn btn-outline-secondary"> + </button>
                </div>
                <div className=" btn-group-verticalbtn-group btn-group-lg" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked></input>
                        <label className="btn btn-outline-secondary" for="btnradio1">S</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                        <label className="btn btn-outline-secondary" for="btnradio2">M</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
                        <label className="btn btn-outline-secondary" for="btnradio3">L</label>
                 </div>
                  <p> Tenemos {cantidad} Items Listados</p>
           </div>

        )
}

export default ItemCount

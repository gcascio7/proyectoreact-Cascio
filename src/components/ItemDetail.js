import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }

    return (
        <>
        {
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} className="img-fluid img-thumbnail rounded-start card"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="h1">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">{item.cost}</p>
                            <p className="card-text"><small className="text-muted">{item.stock} unidades en stock</small></p>
                            {
                                itemCount === 0 
                                ?<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                                :<Link to='/cart'><button>Carrito</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default ItemDetail;



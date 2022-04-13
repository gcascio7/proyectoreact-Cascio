import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            <div className="itemDetailContainer">
                <img src={item.image}/>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <h2> {item.cost}</h2>
                <h3>{item.stock} unidades en stock</h3>
                
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
               
            </div>
        }
        </>
    );
}

export default ItemDetail;

import Item from "./item";

const ItemList = ({items}) => {
    return(
        <div className="galeria">
        {
            items.map(item => 
                <Item
                id={item.id}
                title={item.name}
                price={item.cost}
                stock={item.stock}
                imageURL={item.image} />
                )
        }
        </div>
)}

export default ItemList
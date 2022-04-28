import Item from "./item";

const ItemList = ({items}) => {
    return(
        <div className="galeria">
        {
            items.length>0
            ?items.map(item => 
                <Item
                id={item.id}
                title={item.name}
                price={item.cost}
                stock={item.stock}
                imageURL={item.image}
                />
                )
            : <div class="clearfix">
            <strong>Loading...</strong>
            <div class="spinner-border float-end" role="status" aria-hidden="true"></div>
          </div>
        }
        </div>
)}
 
export default ItemList


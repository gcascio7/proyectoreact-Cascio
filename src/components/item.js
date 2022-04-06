const Item = ({title, stock, price, imageURL}) => {

    return (
        <div className="cards">
                <img src={imageURL}/>
                <p>{title}</p>
                <button >Detalles</button>
                <p>Stock: {stock}</p>
                <p>Precio: {price}</p>
        </div>
    );
}

export default Item
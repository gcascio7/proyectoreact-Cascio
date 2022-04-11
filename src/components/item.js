import 'bootstrap/dist/css/bootstrap.min.css';


const Item = (props) => {

    return (
        
        <div className="card">
        <img src={props.imageURL} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">En Stock: {props.stock}</p>
            <p className="card-text">Precio: {props.price}</p>
            <button className="btn btn-primary">Detalles</button>
        </div>
        </div>
)}
 
export default Item

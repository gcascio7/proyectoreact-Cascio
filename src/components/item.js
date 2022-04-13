import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Item = ({id, price, title, imageURL, stock}) => {

    return (
        
        <div className="card">
        <img src={imageURL} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">En Stock: {stock}</p>
            <p className="card-text">Precio: {price}</p>
            <Link to={`/detail/${id}`}><button className="btn btn-primary"> Detalles</button></Link>
        </div>
        </div>
)}
 
export default Item

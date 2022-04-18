import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Item = (props) => {

    return (
        <div className="row row-cols-auto"> 
        <div className="col">
        <div className="card text-center">
        <img src={props.imageURL} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="h3">{props.title}</h5>
            <p className="card-text">En Stock: {props.stock}</p>
            <p className="card-text">Precio: {props.price}</p>
            <Link to={`/detail/${props.id}`}><button className="btn btn-primary"> Detalles</button></Link>
        </div>
        </div>
        </div>
        </div>

)}
 
export default Item

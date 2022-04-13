import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
        <div className="container-fluid">
          <Link to="/"><a className="navbar-brand">Braca Indumentaria</a></Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/category/1"> <a className="nav-link active" aria-current="page" href="#">Remeras</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/category/2"><a className="nav-link" href="#">Pantalones</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/category/3"><a className="nav-link" href="#">Camperas</a></Link>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
    )
}

export default Navbar
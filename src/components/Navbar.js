import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-auto">
        <div className="container-fluid">
          <Link to="/"><h1 className="h1">Braca Indumentaria</h1></Link>
          <div className="navbar-collapse category" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/category/remeras" className="nav-link active"> Remeras</Link>
              </li>
              <li className="nav-item">
              <Link to="/category/pantalones" className="nav-link active">Pantalones</Link>
              </li>
              <li className="nav-item">
              <Link to="/category/camperas" className="nav-link active">Camperas</Link>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
    )
}

export default Navbar
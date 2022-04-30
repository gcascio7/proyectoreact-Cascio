import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-auto">
        <div className="container-fluid">
          <Link to="/"><a className="h2">Braca Indumentaria</a></Link>
          <div className="navbar-collapse category" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/category/remeras"> <a className="nav-link active">Remeras</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/category/pantalones"><a className="nav-link active">Pantalones</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/category/camperas"><a className="nav-link active">Camperas</a></Link>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
    )
}

export default Navbar
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-auto">
        <div className="container-fluid">
          <Link to="/"><a className="h2 navbar-dark">Braca Indumentaria</a></Link>
          <div className="navbar-collapse category" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/category/1"> <a className="nav-link active" aria-current="page" href="#">Remeras</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/category/2"><a className="nav-link active" href="#">Pantalones</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/category/3"><a className="nav-link active" href="#">Camperas</a></Link>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
    )
}

export default Navbar
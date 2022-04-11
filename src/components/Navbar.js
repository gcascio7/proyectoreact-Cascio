import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Braca Indumentaria</a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
    )
}

export default Navbar
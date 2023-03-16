import { Link } from 'react-router-dom';
import logoWhite from '../assets/fb-white.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary shadow sticky-top">
      <div className="container">
        <Link to="/"><img src={logoWhite} height={50} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Codes</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Games</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Designs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

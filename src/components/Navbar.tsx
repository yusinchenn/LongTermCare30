import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">長照 3.0</span>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">首頁</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">認識長照</Link>
          </li>
          <li className="nav-item">
            <Link to="/map" className="nav-link">據點地圖</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link">長照資源</Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-link">聯絡協助</Link>
          </li>
        </ul>

        <div className="nav-hotline">
          <span className="hotline-icon">📞</span>
          <span className="hotline-text">1966</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

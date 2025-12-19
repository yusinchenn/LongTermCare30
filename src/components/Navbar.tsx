import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end>首頁</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>認識長照</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/map" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>據點地圖</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resources" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>長照資源</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/help" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>聯絡協助</NavLink>
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

import "../css/navbar.css";
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa'; // FaTimes import was unused
import { Link } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();

  // Toggle the navbar visibility
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  // Hide the navbar when a link is clicked
  const hideNavBar = () => {
    navRef.current.classList.remove('responsive-nav');
  };

  return (
    <div className="nav-bar">
      <ul className="navbar-links">
        <nav ref={navRef}>
          <li>
            <Link to="/home" onClick={hideNavBar}>Home</Link> 
          </li>
          <li>
            <Link to="/about" onClick={hideNavBar}>About</Link>
          </li>
          <li>
            <Link to="/work" onClick={hideNavBar}>Work</Link>
          </li>
          <li>
            <Link to="/resume" onClick={hideNavBar}>Resume</Link>
          </li>
          <li>
            <Link to="/contact" onClick={hideNavBar}>Contact</Link>
          </li>
        </nav>
      </ul>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;

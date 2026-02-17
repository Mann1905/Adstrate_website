import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          Adstrate
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu}>Our Projects</Link>
          </li>
          <li>
            <Link to="/service" onClick={closeMenu}>Services</Link>
          </li>
        </ul>

        <div className={`navbar__actions ${menuOpen ? 'is-open' : ''}`}>
          <Link
            to="/quotation"
            className="navbar__btn navbar__btn--outline"
            onClick={closeMenu}
          >
            Get Quote
          </Link>
          <Link
            to="/contact"
            className="navbar__btn navbar__btn--primary"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

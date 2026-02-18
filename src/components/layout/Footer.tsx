import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__inner container">
          {/* Brand Logo */}
          <div className="footer__brand">
            <Link to="/" className="footer__brand-link">
              Adstrate
            </Link>
          </div>

          {/* Right Side Columns Group */}
          <div className="footer__right">
            {/* Navigation Links */}
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li>
                  <Link to="/" className="footer__nav-link">Home</Link>
                </li>
                <li>
                  <Link to="/" className="footer__nav-link">About</Link>
                </li>
                <li>
                  <Link to="/service" className="footer__nav-link">Services</Link>
                </li>
                <li>
                  <Link to="/blog" className="footer__nav-link">Our Projects</Link>
                </li>
                <li>
                  <Link to="/blog" className="footer__nav-link">Blogs</Link>
                </li>
              </ul>
            </nav>

            {/* Call-to-Action Buttons */}
            <div className="footer__actions">
              <Link to="/quotation" className="footer__btn footer__btn--outline">
                Get Quote
              </Link>
              <Link to="/contact" className="footer__btn footer__btn--primary">
                Contact Us
              </Link>
            </div>

            {/* Contact Info & Social Media */}
            <div className="footer__contact">
              <div className="footer__contact-info">
                <p className="footer__contact-item">+91 8976 050 818</p>
                <p className="footer__contact-item">contact@adstrate.in</p>
              </div>
              <div className="footer__social">
                <a
                  href="https://www.instagram.com/adstrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="url(#footer-insta-gradient)" width="40" height="40">
                    <defs>
                      <linearGradient id="footer-insta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.644-1.44-1.44-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/adstrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="#0A66C2" width="40" height="40">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="footer__bottom">
        <div className="footer__legal container">
          <Link to="/terms" className="footer__legal-link">Terms & Conditions</Link>
          <Link to="/privacy" className="footer__legal-link">Privacy Policies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

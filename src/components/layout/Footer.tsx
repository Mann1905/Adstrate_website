import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import instagramIcon from '../../assets/images/element/Instagram.svg';
import linkedInIcon from '../../assets/images/element/LinkedIn.svg';

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
                  <img src={instagramIcon} alt="Instagram" className="footer__social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/adstrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Follow us on LinkedIn"
                >
                  <img src={linkedInIcon} alt="LinkedIn" className="footer__social-icon" />
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

import React, { useState } from 'react';
import './contact.css';
import contactHeroImage from '../../assets/images/contact/mock-01.jpg';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="contact-banner" aria-label="Contact banner">
        <div className="contact-banner__inner">
          <div className="contact-banner__image">
            <img
              src={contactHeroImage}
              alt="Contact Adstrate"
              className="contact-banner__img"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-main">
        <div className="contact-main__inner">
          {/* Left Column: Contact Information */}
          <div className="contact-info">
            <h1 className="contact-info__title">Contact Us</h1>
            
            <p className="contact-info__text">
              Looking for a results-driven digital marketing agency in Mumbai? At Adstrate, we offer social media marketing, content creation, and Instagram marketing services, combining creative strategies with data-driven insights to boost your brand's online presence and drive growth. We handle your digital marketing so you can focus on growing your business.
            </p>

            <div className="contact-info__details">
              <div className="contact-info__detail-item">
                <p className="contact-info__detail-label">Phone No:</p>
                <p className="contact-info__detail-value">+91 8976 050 818</p>
              </div>
              <div className="contact-info__detail-item">
                <p className="contact-info__detail-label">Email:</p>
                <p className="contact-info__detail-value">contact@adstrate.in</p>
              </div>
            </div>

            <div className="contact-info__follow">
              <h3 className="contact-info__follow-title">Follow Us</h3>
              <div className="contact-info__social">
                <a
                  href="https://www.instagram.com/adstrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__social-link"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="url(#contact-insta-gradient)" width="40" height="40">
                    <defs>
                      <linearGradient id="contact-insta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                  className="contact-info__social-link"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="#0A66C2" width="40" height="40">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-box">
            <h2 className="contact-form-box__title">Reach Out</h2>
            
            <p className="contact-form-box__text">
              Looking for a results-driven digital marketing agency in Mumbai? At Adstrate, we provide comprehensive solutions including social media marketing in Mumbai, strategic social media content creation, and Instagram marketing agency services.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__field">
                <label htmlFor="contact-name" className="contact-form__label">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-form__input"
                  placeholder="Name"
                  required
                  aria-required="true"
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-phone" className="contact-form__label">
                  Phone No
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-form__input"
                  placeholder="Phone No"
                  required
                  aria-required="true"
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message" className="contact-form__label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-form__textarea"
                  placeholder="Message"
                  rows={4}
                  required
                  aria-required="true"
                />
              </div>

              <button type="submit" className="contact-form__submit">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

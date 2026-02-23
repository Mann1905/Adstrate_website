import React, { useState } from 'react';
import './contact.css';
import instagramIcon from '../../assets/images/element/Instagram.svg';
import linkedinIcon from '../../assets/images/element/LinkedIn.svg';
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
          {/* Left Column: Contact Information */}
          <div className="contact-info">
            <div className="contact-info__intro">
              <h1 className="contact-info__title">Contact Us</h1>
              <p className="contact-info__text">
                Looking for a results-driven digital marketing agency in Mumbai? At Adstrate, we offer social media marketing, content creation, and Instagram marketing services, combining creative strategies with data-driven insights to boost your brand's online presence and drive growth. We handle your digital marketing so you can focus on growing your business.
              </p>
            </div>

            <div className="contact-info__details-block">
              <div className="contact-info__details">
                <div className="contact-info__detail-item">
                  <span className="link-label">Phone No:</span>
                  <a href="tel:+918976050818" className="link-text">+91 8976 050 818</a>
                </div>
                <div className="contact-info__detail-item">
                  <span className="link-label">Email:</span>
                  <a href="mailto:contact@adstrate.in" className="link-text">contact@adstrate.in</a>
                </div>
              </div>
              <div className="contact-info__follow">
                <span className="contact-info__follow-title link-label">Follow Us</span>
                <div className="contact-info__social">
                  <a
                    href="https://www.instagram.com/adstrate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__social-link"
                    aria-label="Follow us on Instagram"
                  >
                    <img src={instagramIcon} alt="Instagram" />
                      
                  </a>
                  <a
                    href="https://www.linkedin.com/company/adstrate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__social-link"
                    aria-label="Follow us on LinkedIn"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-box">
            <div className="contact-form-box__inner">
              <div className="contact-form-box__header">
                <h2 className="contact-form-box__title">Reach Out</h2>
                <p className="contact-form-box__text">
                  Looking for a results-driven digital marketing agency in Mumbai? At Adstrate, we provide comprehensive solutions including social media marketing in Mumbai, strategic social media content creation, and Instagram marketing agency services.
                </p>
              </div>
              
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__fields">
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

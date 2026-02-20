import React, { useState } from 'react';
import instagramIcon from '../../assets/images/element/Instagram.svg';
import linkedinIcon from '../../assets/images/element/LinkedIn.svg';
import './quotes.css';

const Quotation: React.FC = () => {
  const heroImage = '/src/assets/images/Quote/Hero-Section.jpg';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Quotation form submitted:', formData);
  };

  return (
    <div className="quotes-page" aria-label="Get Quote">
      <div className="quotes-page__card">
        <section className="quotes-page__left">
          <img
            src={heroImage}
            alt="Professional camera setup for digital content creation"
            className="quotes-page__image"
          />
          <div className="quotes-page__overlay">
            <p className="quotes-page__caption">
              As a top digital marketing company in Mumbai, we focus on
              measurable outcomes, ensuring your business grows and stays
              competitive.
            </p>
            <div className="quotes-page__arrows" aria-label="Image navigation">
              <button
                type="button"
                className="quotes-page__arrow-btn quotes-page__arrow-btn--prev"
                aria-label="Previous"
              >
                {'\u2190'}
              </button>
              <button
                type="button"
                className="quotes-page__arrow-btn quotes-page__arrow-btn--next"
                aria-label="Next"
              >
                {'\u2192'}
              </button>
            </div>
          </div>
        </section>

        <section className="quotes-page__right">
          <h2 className="quotes-page__title">Get Quote</h2>
          <p className="quotes-page__description">
            Get a custom proposal from Adstrate, a leading digital marketing
            agency in Mumbai. We specialize in social media and Instagram
            marketing, plus content creation, to boost your digital presence and
            drive measurable growth.
          </p>

          <form className="quotes-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="quote-name" className="quotes-form__label">
              Name
            </label>
            <input
              id="quote-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="quotes-form__input"
              placeholder="Name"
              required
            />

            <label htmlFor="quote-phone" className="quotes-form__label">
              Phone No
            </label>
            <input
              id="quote-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="quotes-form__input"
              placeholder="Phone No"
              required
            />

            <label htmlFor="quote-message" className="quotes-form__label">
              Message
            </label>
            <textarea
              id="quote-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="quotes-form__textarea"
              placeholder="Message"
              rows={5}
              required
            />

            <button type="submit" className="quotes-form__submit">
              Contact Us
            </button>
          </form>

          <div className="quotes-page__contact">
            <p className="quotes-page__contact-label">Phone No:</p>
            <p className="quotes-page__contact-value">+91 8976 050 818</p>
          </div>

          <div className="quotes-page__contact quotes-page__contact--email">
            <p className="quotes-page__contact-label">Email:</p>
            <div className="quotes-page__email-row">
              <p className="quotes-page__contact-value">contact@adstrate.in</p>
              <div className="quotes-page__social">
                <a
                  href="https://www.instagram.com/adstrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src={instagramIcon} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/adstrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={linkedinIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Quotation;

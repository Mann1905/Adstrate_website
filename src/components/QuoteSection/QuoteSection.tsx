import React, { useState } from 'react';
import heroImage from '../../assets/images/Quote/Hero-Section.jpg';
import instagramIcon from '../../assets/images/element/Instagram.svg';
import linkedinIcon from '../../assets/images/element/LinkedIn.svg';

export interface QuoteSectionProps {
  /** Optional prefix for form field IDs to avoid clashes when multiple instances exist (e.g. "service"). */
  idPrefix?: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ idPrefix = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Quotation form submitted:', formData);
  };

  const nameId = idPrefix ? `quote-name-${idPrefix}` : 'quote-name';
  const phoneId = idPrefix ? `quote-phone-${idPrefix}` : 'quote-phone';
  const messageId = idPrefix ? `quote-message-${idPrefix}` : 'quote-message';

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
            <div className="quotes-page__overlay-content">
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
          </div>
        </section>

        <section className="quotes-page__right">
          <div className="quotes-page__right-content">
            <div className="quotes-page__right-content-item">
              <h2 className="quotes-page__title">Get Quote</h2>
              <p className="quotes-page__description">
                Get a custom proposal from Adstrate, a leading digital marketing
                agency in Mumbai. We specialize in social media and Instagram
                marketing, plus content creation, to boost your digital presence and
                drive measurable growth.
              </p>
            </div>

            <div className="quotes-page__right-content-form">
              <form className="quotes-form" onSubmit={handleSubmit} noValidate>
                <div className="quotes-form__fields">
                  <div className="quotes-form__field">
                    <label htmlFor={nameId} className="quotes-form__label">
                      Name
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="quotes-form__input"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="quotes-form__field">
                    <label htmlFor={phoneId} className="quotes-form__label">
                      Phone No
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="quotes-form__input"
                      placeholder="Phone No"
                      required
                    />
                  </div>

                  <div className="quotes-form__field">
                    <label htmlFor={messageId} className="quotes-form__label">
                      Message
                    </label>
                    <textarea
                      id={messageId}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="quotes-form__textarea"
                      placeholder="Message"
                      rows={5}
                      required
                    />
                  </div>
                </div>

                <div className="quotes-form__actions">
                  <button type="submit" className="quotes-form__submit">
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="quotes-page__contact-section">
            <div className="quotes-page__contact-left">
              <div className="quotes-page__contact-item">
                <div className="quotes-page__contact-label link-label">Phone No:</div>
                <a href="tel:+918976050818" className="quotes-page__contact-link link-text">
                  +91 8976 050 818
                </a>
              </div>
              <div className="quotes-page__contact-item">
                <div className="quotes-page__contact-label link-label">Email:</div>
                <a href="mailto:contact@adstrate.in" className="quotes-page__contact-link link-text">
                  contact@adstrate.in
                </a>
              </div>
            </div>
            <div className="quotes-page__contact-right">
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

export default QuoteSection;

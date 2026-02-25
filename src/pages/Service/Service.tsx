import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css';
import '../../pages/Quotation/quotes.css';
import heroImage from '../../assets/images/Quote/Hero-Section.jpg';
import QuoteSection from '../../components/QuoteSection';

const PROCESS_STEPS = [
  { num: '01.', title: 'Discovery Call', text: 'Understand client goals, target audience, and competitor landscape.' },
  { num: '02.', title: 'Requirement Documentation', text: 'Document functional requirements, scope, and key deliverables for the project.' },
  { num: '03.', title: 'Wireframing & Design Mockups', text: 'Create low- and high-fidelity layouts to define user journeys and page structure.' },
  { num: '04.', title: 'UI/UX Design', text: 'Apply brand guidelines, visual hierarchy, and UX best practices to final designs.' },
  { num: '05.', title: 'Development & CMS Integration', text: 'Build responsive pages, integrate CMS, and ensure secure, scalable code.' },
  { num: '06.', title: 'SEO & Performance Optimization', text: 'Optimize for search visibility, fast load times, and Core Web Vitals.' },
  { num: '07.', title: 'Quality Assurance & Testing', text: 'Run cross-browser, device, and usability tests with iterative refinements.' },
  { num: '08.', title: 'Launch & Handover', text: 'Deploy the site, share documentation, and provide training for smooth handover.' },
];

const Service: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  const toggleStep = useCallback((index: number) => {
    setExpandedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  return (
    <main className="services-page">
      <section
        className="services-page__hero"
        aria-labelledby="services-hero-heading"
      >
        <div className="services-page__hero-inner">
          <div className="services-page__hero-image-wrapper">
            <img
              src={heroImage}
              alt="Comprehensive website design and development services"
              className="services-page__hero-image"
            />
            <div className="services-page__hero-overlay">
              <div className="services-page__hero-overlay-content">
                <h1 id="services-hero-heading" className="services-page__hero-title">
                  Comprehensive Website Design &amp; Development Services
                </h1>
                <p className="services-page__hero-text">
                  As a top digital marketing agency in Mumbai, Adstrate offers end-to-end website design and development services that combine creative design, responsive UX/UI, and technical excellence.
                </p>
                <button
                  type="button"
                  className="services-page__hero-cta"
                  onClick={() => navigate('/quotation')}
                >
                  Get Quote
                  <span className="services-page__hero-cta-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="services-coverage"
        aria-labelledby="services-coverage-heading"
      >
        <div className="services-coverage__grid">
          <div className="services-coverage__intro">
            <h2
              id="services-coverage-heading"
              className="services-coverage__title"
            >
              What we cover
            </h2>
            <p className="services-coverage__description">
              Our website design and development services provide businesses
              with visually appealing, functional, and performance-optimized
              websites.
            </p>
          </div>

          <article className="services-coverage__card">
            <h3 className="services-coverage__card-title">
              Discovery &amp; Requirement Gathering
            </h3>
            <p className="services-coverage__card-text">
              Understand business objectives, target audience, competitors, and
              functional requirements.
            </p>
          </article>

          <article className="services-coverage__card">
            <h3 className="services-coverage__card-title">
              Wireframing &amp; Sitemap Planning
            </h3>
            <p className="services-coverage__card-text">
              Define website structure, navigation, and user flow for optimal
              usability.
            </p>
          </article>

          <article className="services-coverage__card">
            <h3 className="services-coverage__card-title">
              UI/UX Design Execution
            </h3>
            <p className="services-coverage__card-text">
              Create responsive, mobile-first, and conversion-oriented layouts
              aligned with brand identity.
            </p>
          </article>

          <article className="services-coverage__card">
            <h3 className="services-coverage__card-title">
              Development &amp; CMS Setup
            </h3>
            <p className="services-coverage__card-text">
              Implement clean code, WordPress or Shopify configuration, and
              security best practices.
            </p>
          </article>

          <article className="services-coverage__card">
            <h3 className="services-coverage__card-title">
              SEO &amp; Performance Optimization
            </h3>
            <p className="services-coverage__card-text">
              Ensure websites are SEO-friendly, fast-loading, and optimized for
              search engines.
            </p>
          </article>

          <article className="services-coverage__card">
            <h3 className="services-coverage__card-title">
              Quality Assurance &amp; Testing
            </h3>
            <p className="services-coverage__card-text">
              Conduct cross-browser, device responsiveness, and performance
              checks with revision rounds.
            </p>
          </article>

          <article className="services-coverage__card">
            <h3 className="services-coverage__card-title">
              Launch &amp; Analytics Integration
            </h3>
            <p className="services-coverage__card-text">
              Deploy the website, integrate analytics, and provide handover
              documentation.
            </p>
          </article>

          <article className="services-coverage__card">
            <h3 className="services-coverage__card-title">
              Training &amp; Offboarding Support
            </h3>
            <p className="services-coverage__card-text">
              Offer basic training, offboarding support, and recommendations for
              ongoing maintenance.
            </p>
          </article>
        </div>
      </section>

      <section
        className="services-process"
        aria-labelledby="services-process-heading"
      >
        <div className="services-process__layout">
          <div className="services-process__intro">
            <h2
              id="services-process-heading"
              className="services-process__title"
            >
              Step-by-Step Website Development Process
            </h2>
            <p className="services-process__description">
              Adstrate follows a structured approach for website design and
              development in Mumbai, ensuring every project aligns with business
              goals and marketing objectives.
            </p>
          </div>

          <div className="services-process__steps" aria-label="Website development steps">
            {PROCESS_STEPS.map((step, index) => {
              const isExpanded = expandedSteps.has(index);
              return (
                <div key={step.num} className="services-process__step">
                  <span className="quotes">{step.num}</span>
                  <div className="services-process__step-main">
                    <div className="services-process__step-content">
                      <h3 className="services-process__step-title">{step.title}</h3>
                      {isExpanded && (
                        <p className="services-process__step-text">{step.text}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      className={`services-process__step-arrow ${isExpanded ? 'services-process__step-arrow--expanded' : ''}`}
                      onClick={() => toggleStep(index)}
                      aria-expanded={isExpanded}
                      aria-label={isExpanded ? 'Collapse step' : 'Expand step'}
                    >
                      ˅
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <QuoteSection idPrefix="service" />
    </main>
  );
};

export default Service;


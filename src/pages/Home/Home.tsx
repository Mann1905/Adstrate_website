import React from 'react';
import Button from '../../components/common/Button/Button';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to React TypeScript Project</h1>
        <p>This is a scalable, team-friendly React structure using TypeScript and Vite.</p>
        <div className="button-group">
          <Button variant="primary" size="large">
            Get Started
          </Button>
          <Button variant="secondary" size="large">
            Learn More
          </Button>
        </div>
      </section>
      
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>TypeScript</h3>
            <p>Type-safe development with TypeScript</p>
          </div>
          <div className="feature-card">
            <h3>Vite</h3>
            <p>Fast development with Vite bundler</p>
          </div>
          <div className="feature-card">
            <h3>Modular Structure</h3>
            <p>Well-organized folder structure for scalability</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


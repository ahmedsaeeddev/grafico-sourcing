
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Professional
            <span className="highlight"> Digitizing</span>
            <br />
            Services
          </h1>
          <p className="hero-subtitle">
            Transform your designs into stunning embroidery files, vector art, and custom patches. 
            Quality guaranteed with 24-hour turnaround.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="cta-primary">
              Get Free Quote
            </Link>
            <Link to="/services" className="cta-secondary">
              View Services
            </Link>
          </div>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>24hr Delivery</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>100% Quality</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔄</span>
              <span>Free Revisions</span>
            </div>
          </div>
        </div>
        <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
          <div className="hero-graphic">
            <div className="graphic-element element-1"></div>
            <div className="graphic-element element-2"></div>
            <div className="graphic-element element-3"></div>
            <div className="graphic-text">
              <span>DIGITIZING</span>
              <span>EXCELLENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

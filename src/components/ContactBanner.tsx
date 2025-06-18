
import React from 'react';
import { Link } from 'react-router-dom';

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="container">
        <div className="banner-content">
          <h2>Ready to Bring Your Designs to Life?</h2>
          <p>
            Get started with a free quote today. Our expert team is ready to transform 
            your vision into high-quality digitized artwork.
          </p>
          <div className="banner-cta">
            <Link to="/contact" className="cta-primary">
              Get Free Quote
            </Link>
            <Link to="/services" className="cta-outline">
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="banner-features">
          <div className="banner-feature">
            <span className="feature-icon">📞</span>
            <span>Free Consultation</span>
          </div>
          <div className="banner-feature">
            <span className="feature-icon">💰</span>
            <span>Competitive Pricing</span>
          </div>
          <div className="banner-feature">
            <span className="feature-icon">🚀</span>
            <span>Fast Turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;

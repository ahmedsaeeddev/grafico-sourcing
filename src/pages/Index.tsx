
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import Testimonials from '../components/Testimonials';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Index = () => {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <section id="intro" className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Welcome to Grafico Sourcing</h2>
            <p>
              Your premier destination for professional digitizing services. We specialize in 
              transforming your designs into high-quality embroidery files, vector art, and 
              custom patches with precision and artistry.
            </p>
            <div className="intro-stats">
              <div className="stat">
                <h3>5000+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat">
                <h3>24hr</h3>
                <p>Turnaround Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesPreview />
      <Testimonials />
      <ContactBanner />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

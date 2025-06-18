
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const About = () => {
  return (
    <div className="page">
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <h1>About Grafico Sourcing</h1>
          <p>Crafting digital excellence since our inception</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded with a passion for precision and creativity, Grafico Sourcing has been 
                at the forefront of digital embroidery and design services. Our journey began 
                with a simple mission: to transform creative visions into tangible, high-quality 
                digitized artwork.
              </p>
              <p>
                Over the years, we've built a reputation for excellence, serving clients from 
                small businesses to large corporations. Our team combines traditional craftsmanship 
                with cutting-edge technology to deliver results that exceed expectations.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Company Image</span>
              </div>
            </div>
          </div>
          
          <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To provide exceptional digitizing services that bring designs to life with 
                unmatched quality, precision, and creativity while maintaining the highest 
                standards of customer service.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To be the global leader in digitizing services, recognized for innovation, 
                quality, and our commitment to helping businesses and individuals express 
                their brand identity through superior embroidery and design solutions.
              </p>
            </div>
          </div>
          
          <div className="values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value">
                <h4>Quality</h4>
                <p>We never compromise on the quality of our work, ensuring every project meets the highest standards.</p>
              </div>
              <div className="value">
                <h4>Innovation</h4>
                <p>We continuously evolve our techniques and technology to stay ahead of industry trends.</p>
              </div>
              <div className="value">
                <h4>Reliability</h4>
                <p>Our clients trust us to deliver on time, every time, with consistent excellence.</p>
              </div>
              <div className="value">
                <h4>Partnership</h4>
                <p>We build lasting relationships with our clients, working as partners in their success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;

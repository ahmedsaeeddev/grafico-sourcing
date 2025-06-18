
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Services = () => {
  return (
    <div className="page">
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional digitizing solutions for all your needs</p>
        </div>
      </section>
      
      <section className="services-detailed">
        <div className="container">
          <div className="service-detail">
            <div className="service-content">
              <div className="service-icon">🧵</div>
              <h2>Embroidery Digitizing</h2>
              <p>
                Transform your logos, designs, and artwork into high-quality embroidery files. 
                Our expert digitizers ensure perfect stitch quality, optimal density, and 
                flawless execution on any fabric type.
              </p>
              <ul>
                <li>Logo digitizing for corporate apparel</li>
                <li>Custom design digitizing</li>
                <li>Complex artwork digitizing</li>
                <li>Multi-format file delivery (DST, EMB, PES, etc.)</li>
                <li>Free editing and revisions</li>
              </ul>
              <div className="service-features">
                <span>24-48 Hour Turnaround</span>
                <span>Free Revisions</span>
                <span>All Formats Supported</span>
              </div>
            </div>
            <div className="service-image">
              <div className="image-placeholder">
                <span>Embroidery Sample</span>
              </div>
            </div>
          </div>
          
          <div className="service-detail reverse">
            <div className="service-content">
              <div className="service-icon">🎨</div>
              <h2>Vector Art Services</h2>
              <p>
                Professional vector conversion services that transform your raster images 
                into scalable vector artwork. Perfect for printing, embroidery, and digital use.
              </p>
              <ul>
                <li>Logo vectorization</li>
                <li>Image to vector conversion</li>
                <li>Custom vector artwork creation</li>
                <li>Color separation and cleanup</li>
                <li>Print-ready file preparation</li>
              </ul>
              <div className="service-features">
                <span>AI & EPS Formats</span>
                <span>Unlimited Scalability</span>
                <span>Color Matching</span>
              </div>
            </div>
            <div className="service-image">
              <div className="image-placeholder">
                <span>Vector Art Sample</span>
              </div>
            </div>
          </div>
          
          <div className="service-detail">
            <div className="service-content">
              <div className="service-icon">🏷️</div>
              <h2>Custom Patch Manufacturing</h2>
              <p>
                Complete patch manufacturing services from design to delivery. We create 
                high-quality embroidered, chenille, and PVC patches for any application.
              </p>
              <ul>
                <li>Embroidered patches with merrowed borders</li>
                <li>Chenille letter patches</li>
                <li>PVC rubber patches</li>
                <li>Iron-on and sew-on backing options</li>
                <li>Custom shapes and sizes</li>
              </ul>
              <div className="service-features">
                <span>Multiple Patch Types</span>
                <span>Custom Shapes</span>
                <span>Bulk Discounts</span>
              </div>
            </div>
            <div className="service-image">
              <div className="image-placeholder">
                <span>Patch Samples</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="service-process">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Submit Your Design</h3>
              <p>Send us your artwork, logo, or concept through our easy upload system.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Expert Digitizing</h3>
              <p>Our skilled digitizers work on your project with precision and attention to detail.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Quality Review</h3>
              <p>Every file undergoes thorough quality checks before delivery.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>File Delivery</h3>
              <p>Receive your high-quality digitized files in all required formats.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Services;

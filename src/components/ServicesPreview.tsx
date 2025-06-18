
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-preview" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional digitizing solutions tailored to your needs</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <span>🧵</span>
            </div>
            <h3>Embroidery Digitizing</h3>
            <p>
              Convert your logos and designs into high-quality embroidery files. 
              Perfect stitch quality guaranteed for any fabric type.
            </p>
            <div className="service-features">
              <span>• All machine formats</span>
              <span>• 24-48hr turnaround</span>
              <span>• Free revisions</span>
            </div>
            <Link to="/services" className="service-link">Learn More →</Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <span>🎨</span>
            </div>
            <h3>Vector Art Services</h3>
            <p>
              Professional vector conversion services that transform your images 
              into scalable artwork perfect for any application.
            </p>
            <div className="service-features">
              <span>• AI & EPS formats</span>
              <span>• Unlimited scaling</span>
              <span>• Color matching</span>
            </div>
            <Link to="/services" className="service-link">Learn More →</Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <span>🏷️</span>
            </div>
            <h3>Custom Patches</h3>
            <p>
              Complete patch manufacturing from design to delivery. Embroidered, 
              chenille, and PVC patches in any shape or size.
            </p>
            <div className="service-features">
              <span>• Multiple patch types</span>
              <span>• Custom shapes</span>
              <span>• Bulk discounts</span>
            </div>
            <Link to="/services" className="service-link">Learn More →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

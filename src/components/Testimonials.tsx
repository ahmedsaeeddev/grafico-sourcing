
import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
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

    const testimonials = sectionRef.current?.querySelectorAll('.testimonial');
    testimonials?.forEach((testimonial) => observer.observe(testimonial));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Trusted by businesses worldwide for quality digitizing services</p>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="testimonial-content">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Grafico Sourcing transformed our company logo into a beautiful embroidery design. 
                The quality exceeded our expectations and the turnaround was incredibly fast!"
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">JS</div>
              <div className="author-info">
                <h4>John Smith</h4>
                <span>CEO, TechCorp</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-content">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Professional service and attention to detail. They understood exactly what we needed 
                for our custom patches and delivered perfect results."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">MJ</div>
              <div className="author-info">
                <h4>Maria Johnson</h4>
                <span>Owner, Fashion Boutique</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-content">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Outstanding vector art services! They converted our old logo perfectly and 
                provided files in all the formats we needed. Highly recommended!"
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">DW</div>
              <div className="author-info">
                <h4>David Wilson</h4>
                <span>Marketing Director, StartupXYZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

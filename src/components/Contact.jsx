import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Endpoint Formspree - remplacez "your-form-id" par votre vrai ID après inscription
    const endpoint = "https://formspree.io/f/mblyvpzp";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        alert(content.alerts.success);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(content.alerts.error);
      }
    } catch (error) {
      alert(content.alerts.error);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">{content.sectionTitle}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{content.title}</h3>
            <p>{content.description}</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>{content.methods.email}</h4>
                  <a href="mailto:pro@arthurblamart.fr" className="contact-link">
                    pro@arthurblamart.fr
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-info">
                  <h4>{content.methods.phone}</h4>
                  <a href="tel:+33770468083" className="contact-link">
                    +33 7 70 46 80 83
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-info">
                  <h4>{content.methods.location}</h4>
                  <p>{content.methods.locationValue}</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://fr.linkedin.com/in/arthur-blamart-081ba9294" className="social-link linkedin">LinkedIn</a>
              <a href="https://github.com//Arthur-Blamart" className="social-link github">GitHub</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{content.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{content.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">{content.form.subject}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{content.form.message}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              {content.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

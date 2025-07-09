import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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
        alert('Message envoyé ! Je vous répondrai rapidement.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Une erreur s'est produite lors de l'envoi du message.");
      }
    } catch (error) {
      alert("Une erreur s'est produite lors de l'envoi du message.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Discutons de votre projet</h3>
            <p>
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour 
              discuter de vos besoins. Je serais ravi de vous accompagner dans 
              la réalisation de vos objectifs.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>arthur.blamart.dev@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-info">
                  <h4>Téléphone</h4>
                  <p>+33 7 70 46 80 83</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-info">
                  <h4>Localisation</h4>
                  <p>Lannion, France (Remote possible)</p>
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
              <label htmlFor="name">Nom *</label>
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
              <label htmlFor="email">Email *</label>
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
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
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
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

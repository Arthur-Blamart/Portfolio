import React from 'react';
import './Presentation.css';
import profilePhoto from '../assets/moi.jpg';

const Hero = ({ content }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{content.title}</h1>
          <h2 className="hero-subtitle">{content.subtitle}</h2>
          <p className="hero-description">{content.description}</p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              {content.projectsButton}
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              {content.contactButton}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-placeholder">
            <img src={profilePhoto} alt={content.profileAlt} className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

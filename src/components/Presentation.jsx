import React from 'react';
import './Presentation.css';
import profilePhoto from '../assets/moi.jpg';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Arthur BLAMART</h1>
          <h2 className="hero-subtitle">
            Élève-ingénieur en informatique à l'<span className="highlight">ENSSAT</span> & Développeur React & JavaScript
          </h2>
          <p className="hero-description">
            Élève-ingénieur en informatique à l'ENSSAT. Mon parcours est guidé par une passion
            insatiable pour le développement et l'innovation. Ce portfolio présente mes projets académiques
            et personnels qui témoignent de ma volonté de maîtriser les technologies du numérique.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes projets
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-placeholder">
            <img src={profilePhoto} alt="Arthur Blamart" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

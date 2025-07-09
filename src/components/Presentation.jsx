import React from 'react';
import './Presentation.css';
import profilePhoto from '../assets/moi.jpg';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Salut, je suis <span className="highlight">Arthur</span>
          </h1>
          <h2 className="hero-subtitle">
            Étudiant ingénieur - Développeur Freelance
          </h2>
          <p className="hero-description">
            Je désire mettre mes compétences au service de vos projets.
            Que ce soit pour créer des applications web modernes, des sites vitrine ou des solutions sur mesure,
            je suis là pour transformer vos idées en réalité numérique.
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
            <img src={profilePhoto} alt="Arthur - Développeur Freelance" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

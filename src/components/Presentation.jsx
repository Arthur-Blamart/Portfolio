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
            Élève-ingénieur en informatique à l'ENSSAT &
            Étudiant-Entrepreneur de Pépite Bretagne
          </h2>
          <p className="hero-description">
            Élève-ingénieur en informatique à l'ENSSAT. Mon parcours académique est guidé par une passion
            insatiable pour le développement et l'innovation. J'ai dépassé le champ de mes compétences techniques d'ingénieur par mon expérience
            d'étudiant-entrepreneur
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

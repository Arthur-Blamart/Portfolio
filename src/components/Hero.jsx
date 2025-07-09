import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Salut, je suis <span className="highlight">Arthur</span>
          </h1>
          <h2 className="hero-subtitle">
            Développeur Freelance passionné
          </h2>
          <p className="hero-description">
            Je crée des applications web modernes et performantes avec React, Node.js 
            et les dernières technologies. Transformons ensemble vos idées en réalité numérique.
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
            <span>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Arthur</h3>
            <p>Développeur Freelance passionné par la création d'expériences web exceptionnelles.</p>
          </div>
          
          <div className="footer-center">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">À propos</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#experience">Expérience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-right">
            <h4>Contact</h4>
            <p>arthur.blamart.dev@gmail.com</p>
            <p>+33 7 70 46 80 83</p>
            <div className="footer-socials">
              <a href="https://fr.linkedin.com/in/arthur-blamart-081ba9294" aria-label="LinkedIn">💼</a>
              <a href="https://github.com//Arthur-Blamart" aria-label="GitHub">🔗</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Arthur. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

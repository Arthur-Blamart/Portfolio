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
            <p>arthur.dev@example.com</p>
            <p>+33 6 XX XX XX XX</p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="GitHub">🔗</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Arthur. Tous droits réservés.</p>
          <p>Développé avec ❤️ et React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Fermer le menu après navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>Arthur Blamart</h2>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <li><button onClick={() => scrollToSection('about')}>À propos</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Compétences</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projets</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

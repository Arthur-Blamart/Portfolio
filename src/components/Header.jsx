import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>Arthur</h2>
        </div>
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('about')}>À propos</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Compétences</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projets</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Expérience</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

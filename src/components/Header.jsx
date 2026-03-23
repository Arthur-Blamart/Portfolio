import React, { useState } from 'react';
import './Header.css';

const Header = ({ language, onLanguageChange, content }) => {
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

  const handleLanguageChange = () => {
    onLanguageChange(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>{content.brand}</h2>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label={content.ariaToggle}
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {content.menu.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        <div className="language-toggle" role="group" aria-label="Language selector">
          <span className="lang-label">{content.lang.fr}</span>
          <button
            type="button"
            className={`lang-slider ${language === 'en' ? 'en-active' : ''}`}
            onClick={handleLanguageChange}
            aria-label={`Switch language to ${language === 'fr' ? 'English' : 'French'}`}
          >
            <span className="lang-thumb" />
          </button>
          <span className="lang-label">{content.lang.en}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

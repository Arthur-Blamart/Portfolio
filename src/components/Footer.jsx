import React from 'react';
import './Footer.css';

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Arthur</h3>
            <p>{content.description}</p>
          </div>
          
          <div className="footer-center">
            <h4>{content.navigation}</h4>
            <ul className="footer-links">
              {content.links.map((item) => (
                <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-right">
            <h4>{content.contact}</h4>
            <p>pro@arthurblamart.fr</p>
            <p>+33 7 70 46 80 83</p>
            <div className="footer-socials">
              <a href="https://fr.linkedin.com/in/arthur-blamart-081ba9294" aria-label="LinkedIn">💼</a>
              <a href="https://github.com//Arthur-Blamart" aria-label="GitHub">🔗</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

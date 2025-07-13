import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Mon parcours</h3>
            <p>
              Passionné par le développement informatique depuis plusieurs années, j'ai commencé 
              par apprendre en autodidacte avant de compléter mes compétences par ma formation
              en ingénierie informatique.
            </p>
            <p>
              Aujourd'hui, en tant que développeur freelance, j'accompagne mes clients 
              dans la création d'applications web performantes et sur mesure. Mon approche 
              combine expertise technique et compréhension des besoins métier.
            </p>
            
            <h3>Ma philosophie</h3>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">🎯</div>
                <h4>Orienté résultats</h4>
                <p>Je me concentre sur la livraison de solutions qui répondent vraiment aux besoins.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">🚀</div>
                <h4>Innovation</h4>
                <p>J'utilise les dernières technologies pour créer des expériences modernes.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">🤝</div>
                <h4>Collaboration</h4>
                <p>Je travaille en étroite collaboration avec mes clients pour garantir leur satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

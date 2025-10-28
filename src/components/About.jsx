import React from 'react';
import './About.css';
import logoEnssat from '../assets/enssat.jpeg';
import logoDescartes from '../assets/descartes.png';
import logoPepite from '../assets/pepite.png';
import logoBrio from '../assets/brio.jpeg';
import logoJes from '../assets/jes.png';
import logoDocker from '../assets/docker.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
              <h3>Mon parcours académique</h3>
              <div className="education-list">
                <div className="education-item">
                  <div className="item-icon"><img src={logoEnssat} alt="ENSSAT"/></div>
                  <h4>École Nationale Supérieure des Sciences Appliquées et de Technologie (ENSSAT)</h4>
                  <span className="education-date">Septembre 2023 - Aujourd'hui</span>
                  <p>Formation d'ingénieur en informatique — cours et projets en gestion de projet, architectures logicielles et développement web.</p>
                </div>

                <div className="education-item">
                  <div className="item-icon"><img src={logoDescartes} alt="Descartes"/></div>
                  <h4>Classe préparatoire scientifique (MPI)</h4>
                  <span className="education-date">Septembre 2021 - Juillet 2023</span>
                  <p>Filière Mathématiques, Physique et Informatique — acquisition d'un solide socle en informatique théorique et mathématiques.</p>
                </div>
              </div>

              <h3>Mes engagements & missions</h3>
              <div className="engagements-grid">
                <div className="engagement-item">
                  <div className="item-icon"><img src={logoPepite} alt="Pépite Bretagne"/></div>
                  <h4>Étudiant Entrepreneur — PEPITE Bretagne</h4>
                  <span className="engagement-date">Fév 2025 - Mar 2025</span>
                  <p>Développement d'un projet entrepreneurial, formations et accompagnements par des professionnel.</p>
                </div>

                <div className="engagement-item">
                  <div className="item-icon"><img src={logoBrio} alt="BRIO"/></div>
                  <h4>Étudiant Ambassadeur — BRIO (Université de Rennes)</h4>
                  <p>Aide à l'orientation des élèves du secondaires et formations.</p>
                </div>

                <div className="engagement-item">
                  <div className="item-icon"><img src={logoJes} alt="JES"/></div>
                  <h4>Président d'association - Junior ENSSAT Services</h4>
                  <span className="engagement-date">Nov 2024 - Mai 2025</span>
                  <p>Gestion d'équipe & d'association, pilotage de mission de service et organisation d'événements.</p>
                </div>

                <div className="engagement-item">
                  <div className="item-icon"><img src={logoDocker} alt="Docker"/></div>
                  <h4>Mission DevOps</h4>
                  <span className="engagement-date">Octobre 2025</span>
                  <p>Conteneurisation, par Docker, et déploiement d'une application sur Scaleway. Installation d'un pipeline de déploiement continu.</p>
                </div>

              </div>

              <h3>Savoir-être</h3>
              <ul className="skills-list">
                <li>Rigueur</li>
                <li>Capacité d'adaptation</li>
                <li>Esprit d'équipe</li>
                <li>Autonomie</li>
                <li>Organisation & gestion de projet</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

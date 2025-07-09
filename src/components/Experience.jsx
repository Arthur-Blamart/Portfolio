import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Développeur Freelance',
      company: 'Indépendant',
      period: '2023 - Présent',
      description: 'Développement d\'applications web sur mesure pour diverses entreprises.',
      achievements: [
        'Création de 15+ applications React pour différents clients',
        'Amélioration des performances des sites de 40% en moyenne',
        'Mise en place d\'architectures scalables et maintenables'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB']
    },
    {
      title: 'Développeur Frontend',
      company: 'Tech Startup',
      period: '2022 - 2023',
      description: 'Développement de l\'interface utilisateur d\'une plateforme SaaS.',
      achievements: [
        'Refonte complète de l\'interface utilisateur',
        'Intégration de 20+ APIs REST',
        'Réduction du temps de chargement de 60%'
      ],
      technologies: ['React', 'Redux', 'CSS3', 'Jest']
    },
    {
      title: 'Stagiaire Développeur',
      company: 'Agence Web',
      period: '2021 - 2022',
      description: 'Participation au développement de sites web pour des PME locales.',
      achievements: [
        'Développement de 5 sites web responsive',
        'Apprentissage des bonnes pratiques de développement',
        'Formation aux méthodologies Agiles'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress']
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Mon Expérience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

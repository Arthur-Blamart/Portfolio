import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Étudiant ingénieur informatique',
      company: 'ENSSAT - Lannion',
      period: '2023 - Présent',
      description: 'Études en ingénierie spécialisée en informatique à l\'ENSSAT, Lannion.',
      achievements: [
        'Développement d\'applications web à différentes échelles pour projets académiques',
      ],
      technologies: ['React', 'Node.js', 'Java', 'Make', 'CI-CD']
    },
    {
      title: 'Président d\'association étudiante',
      company: 'Junior ENSSAT Service',
      period: '2024 - 2025',
      description: 'Gestion d\'une association étudiante visant à fournir des services informatiques aux entreprises locales.',
      achievements: [
        'Analyse des besoins et mise en application de solutions informatiques',
        'Gestion de projets informatiques pour des PME et des particuliers',
        'Organisation d\'événements professionnalisants pour les étudiants'
      ],
      technologies: ['Organisation', 'Projets', 'WordPress', 'Management']
    },
    {
      title: 'Classe préparatoire aux grandes écoles (MPI)',
      company: 'Lycée Descartes, Tours',
      period: '2021 - 2023',
      description: 'Cycle CPGE afin de se présenter aux grands concours des écoles d\'ingénieurs.',
      achievements: [
        'Développement d\'une grande rigueur et d\'une forte capacité d\'organisation',
        'Acquisition de solides bases théoriques en informatique, mathématiques et physique',
        'Travail d\'initiative personnelle (TIPE) sur l\'intelligence artificielle'
      ],
      technologies: ['C', 'OCaml', 'Unix', 'Git', 'Mathématiques', 'Physique']
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Mon Parcours</h2>
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

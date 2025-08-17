import React from 'react';
import './Projects.css';

const Projects = () => {
  const applications = [
    {
      title: 'Copie de Wordle',
      description: 'Clone du jeu Wordle avec des fonctionnalités interactives.',
      technologies: ['React', 'Node.js', 'Firebase', 'Vite'],
      image: '🕹️',
      github: 'https://github.com/Arthur-Blamart/guessTheWord',
      status: 'Terminé'
    },
    {
      title: 'Gestion Client',
      description: 'API REST pour la gestion des clients avec interfaces pour manipulation des données.',
      technologies: ['REST', 'API', 'Swagger', 'Express', 'Node.js', 'React', 'Tailwind CSS'],
      image: '💼',
      github: 'https://github.com/Arthur-Blamart/GestionClient',
      status: 'En cours'
    }
  ];

  const websites = [
    {
      title: 'Site Vitrine pour un gîte',
      description: 'Site portfolio moderne et responsive afin de promouvoir un gîte.',
      technologies: ['React', 'Vite', 'CSS3', 'GitHub Pages'],
      image: '🏡',
      github: 'https://github.com/Arthur-Blamart/client-lespiguet',
      url: 'https://arthur-blamart.github.io/client-lespiguet/',
      status: 'Terminé'
    },
    {
      title: 'Site pour une Mairie',
      description: 'Site demo pour une mairie avec informations, actualités et démarches administratives.',
      technologies: ['React', 'Vite', 'CSS3', 'GitHub Pages'],
      image: '🏛️',
      github: 'https://github.com/Arthur-Blamart/demo-mairie',
      url: 'https://arthur-blamart.github.io/demo-mairie/',
      status: 'Terminé'
    }
  ];

  const renderProjectCard = (project, index) => (
    <div key={index} className="project-card">
      <div className="project-image">
        <span className="project-emoji">{project.image}</span>
        <div className="project-status">
          <span className={`status-badge ${project.status === 'Terminé' ? 'completed' : 'in-progress'}`}>
            {project.status}
          </span>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
          </a>
          {project.url && (
            <a href={project.url} className="project-link website" target="_blank" rel="noopener noreferrer">
              <span>Voir le site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="projects-sections">
          {/* Section Applications */}
          <div className="projects-section">
            <h3 className="subsection-title">Applications</h3>
            <div className="projects-grid">
              {applications.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>

          {/* Section Sites Web */}
          <div className="projects-section">
            <h3 className="subsection-title">Sites Web</h3>
            <div className="projects-grid">
              {websites.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

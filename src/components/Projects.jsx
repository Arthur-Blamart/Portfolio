import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
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

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

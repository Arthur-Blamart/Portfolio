import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce React',
      description: 'Application e-commerce complète avec panier, paiement et gestion des commandes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: '#',
      demo: '#',
      status: 'Terminé'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Interface d\'administration avec graphiques et analyse de données en temps réel.',
      technologies: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      image: '📊',
      github: '#',
      demo: '#',
      status: 'Terminé'
    },
    {
      title: 'App Mobile React Native',
      description: 'Application mobile cross-platform pour la gestion de tâches et productivité.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '📱',
      github: '#',
      demo: '#',
      status: 'En cours'
    },
    {
      title: 'API REST Microservices',
      description: 'Architecture microservices avec authentification JWT et documentation Swagger.',
      technologies: ['Node.js', 'Docker', 'JWT', 'Swagger'],
      image: '🔧',
      github: '#',
      demo: '#',
      status: 'Terminé'
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
                  <a href={project.demo} className="project-link demo" target="_blank" rel="noopener noreferrer">
                    <span>Demo</span>
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

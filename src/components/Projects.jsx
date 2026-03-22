import React from 'react';
import './Projects.css';
import { SiReact, SiNodedotjs, SiFirebase, SiVite, SiCss3, SiTailwindcss, SiExpress, SiGithub } from 'react-icons/si';
import { FaServer, FaCode } from 'react-icons/fa';

const Projects = () => {
  const applications = [
    {
      title: 'Gestion Client',
      description: 'API REST pour la gestion des clients avec interfaces pour manipulation des données.',
      technologies: ['REST', 'API', 'Swagger', 'Express', 'Node.js', 'React', 'Tailwind CSS'],
      image: '💼',
      github: 'https://github.com/Arthur-Blamart/GestionClient',
      status: 'En cours'
    },
    {
      title: 'Simulation course IA',
      description: 'Algorithme de simulation de course utilisant un algorithme de réfléxion et un moteur physique',
      technologies: ['Python'],
      image: '🕹️',
      github: 'https://github.com/Arthur-Blamart/parcours-generatif',
      status: 'En cours'
    }
  ];

  const websites = [
    {
      title: 'Site Vitrine pour un gîte',
      description: 'Promotions et présentation de gîte.',
      technologies: ['React', 'Vite', 'OVH'],
      image: '🏡',
      github: 'https://github.com/Arthur-Blamart/client-lespiguet',
      url: 'https://location-artynevez.fr',
      status: 'Terminé'
    },
    {
      title: 'Portfolio Personnel',
      description: 'Site personnel pour présenter mes projets et compétences.',
      technologies: ['React', 'Vite', 'OVH'],
      image: '🏛️',
      github: 'https://github.com/Arthur-Blamart/Portfolio',
      url: 'https://arthurblamart.fr',
      status: 'Terminé'
    }
  ];

  const selectIcon = (technologies) => {
    const techs = technologies.map(t => t.toLowerCase());
    if (techs.some(t => t.includes('react'))) return <SiReact />;
    if (techs.some(t => t.includes('node'))) return <SiNodedotjs />;
    if (techs.some(t => t.includes('firebase'))) return <SiFirebase />;
    if (techs.some(t => t.includes('vite'))) return <SiVite />;
    if (techs.some(t => t.includes('tailwind'))) return <SiTailwindcss />;
    if (techs.some(t => t.includes('express'))) return <SiExpress />;
    if (techs.some(t => t.includes('css'))) return <SiCss3 />;
    if (techs.some(t => t.includes('github'))) return <SiGithub />;
    if (techs.some(t => t.includes('rest') || t.includes('api') || t.includes('swagger'))) return <FaServer />;
    return <FaCode />;
  };

  const renderProjectCard = (project, index) => (
    <div key={index} className="project-card">
      <div className="project-image">
        <div className="project-icon" aria-hidden>
          {selectIcon(project.technologies)}
        </div>
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
        <h2 className="section-title">Mes Projets de dev</h2>
        
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

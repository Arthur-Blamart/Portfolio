import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ content }) => {
  return (
    <section className="latest-project" id="projects">
      <div className="container">
        <h2 className="section-title">{content.sectionTitle}</h2>

        <div className="vizeocast-hero">
          <span className="vizeocast-badge">{content.badge}</span>
          <h3 className="vizeocast-title">{content.projectTitle}</h3>
          <p className="vizeocast-subtitle">{content.projectSubtitle}</p>
          <p className="vizeocast-tagline">{content.tagline}</p>
        </div>

        <div className="vizeocast-grid vizeocast-grid-two">
          <div className="vizeocast-block">
            <h4 className="block-title">{content.problemTitle}</h4>
            <p className="block-text">{content.problemText}</p>
          </div>
          <div className="vizeocast-block vizeocast-block-accent">
            <h4 className="block-title">{content.solutionTitle}</h4>
            <p className="block-text">{content.solutionText}</p>
          </div>
        </div>

        <div className="vizeocast-section-block">
          <h4 className="vizeocast-section-title">{content.contributionTitle}</h4>
          <div className="vizeocast-grid vizeocast-grid-three">
            {content.contributionBlocks.map((block, idx) => (
              <div className="contribution-card" key={idx}>
                <div className="contribution-card-header">
                  <span className="contribution-card-number">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h5 className="contribution-card-title">{block.title}</h5>
                    <span className="contribution-card-subtitle">{block.subtitle}</span>
                  </div>
                </div>
                <ul className="contribution-list">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="vizeocast-section-block">
          <h4 className="vizeocast-section-title">{content.stackTitle}</h4>
          <div className="stack-tags">
            {content.stack.map((tech, i) => (
              <span key={i} className="stack-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="vizeocast-section-block">
          <h4 className="vizeocast-section-title">{content.resultsTitle}</h4>
          <div className="vizeocast-grid vizeocast-grid-three">
            {content.results.map((result, i) => (
              <div className="result-card" key={i}>
                <span className="result-highlight">{result.highlight}</span>
                <span className="result-label">{result.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="vizeocast-cta">
          <a
            href={content.ctaUrl}
            className="vizeocast-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{content.ctaLabel}</span>
            <FaExternalLinkAlt aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

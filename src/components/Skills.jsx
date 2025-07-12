import React from 'react';
import './Skills.css';
// Import des icônes depuis react-icons
import { 
  SiC, 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiMysql,
  SiGnubash,
  SiLatex
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = {
    frontend: {
      title: 'Frontend',
      skills: [
        {
          title: 'HTML5',
          icon: <SiHtml5 />,
          color: '#E34F26'
        },
        {
          title: 'CSS3',
          icon: <SiCss3 />,
          color: '#1572B6'
        },
        {
          title: 'JavaScript',
          icon: <SiJavascript />,
          color: '#F7DF1E'
        },
        {
          title: 'React',
          icon: <SiReact />,
          color: '#61DAFB'
        }
      ]
    },
    backend: {
      title: 'Backend',
      skills: [
        {
          title: 'C',
          icon: <SiC />,
          color: '#A8B9CC'
        },
        {
          title: 'Java',
          icon: <FaJava />,
          color: '#ED8B00'
        },
        {
          title: 'Python',
          icon: <SiPython />,
          color: '#3776AB'
        },
        {
          title: 'Node.js',
          icon: <SiNodedotjs />,
          color: '#339933'
        },
        {
          title: 'MySQL',
          icon: <SiMysql />,
          color: '#4479A1'
        }
      ]
    },
    tools: {
      title: 'Outils',
      skills: [
        {
          title: 'Git',
          icon: <SiGit />,
          color: '#F05032'
        },
        {
          title: 'GitHub',
          icon: <SiGithub />,
          color: '#181717'
        },
        {
          title: 'LaTeX',
          icon: <SiLatex />,
          color: '#008080'
        },
        {
          title: 'Bash',
          icon: <SiGnubash />,
          color: '#4EAA25'
        }
      ]
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-categories">
          {Object.entries(skillCategories).map(([categoryKey, category]) => (
            <div key={categoryKey} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

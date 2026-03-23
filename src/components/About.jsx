import React from 'react';
import './About.css';
import logoEnssat from '../assets/enssat.jpeg';
import logoDescartes from '../assets/descartes.png';
import logoPepite from '../assets/pepite.png';
import logoBrio from '../assets/brio.jpeg';
import logoJes from '../assets/jes.png';
import logoDocker from '../assets/docker.png';

const educationLogos = [logoEnssat, logoDescartes];
const engagementLogos = [logoPepite, logoBrio, logoJes, logoDocker];

const About = ({ content }) => {
  const reward = content.reward;

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">{content.sectionTitle}</h2>
        <div className="about-content">

          <div className="about-text">
              <h3>{content.rewardsTitle}</h3>
              <div className="rewards-list">
                <div className="reward-item">
                  <h4>{reward.title}</h4>
                  <span className="reward-date">{reward.date}</span>
                  <p>
                    {reward.beforeKeyword1}
                    <strong>{reward.keyword1}</strong>
                    {reward.between1}
                    <strong>{reward.keyword2}</strong>
                    {reward.between2}
                    <strong>{reward.keyword3}</strong>
                    {reward.afterKeyword3}
                  </p>
                </div>
              </div>

              <h3>{content.educationTitle}</h3>
              <div className="education-list">
                {content.education.map((item, index) => (
                  <div className="education-item" key={`${item.title}-${index}`}>
                    <div className="item-icon"><img src={educationLogos[index]} alt={item.iconAlt}/></div>
                    <h4>{item.title}</h4>
                    <span className="education-date">{item.date}</span>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              <h3>{content.engagementsTitle}</h3>
              <div className="engagements-grid">
                {content.engagements.map((item, index) => (
                  <div className="engagement-item" key={`${item.title}-${index}`}>
                    <div className="item-icon"><img src={engagementLogos[index]} alt={item.iconAlt}/></div>
                    <h4>{item.title}</h4>
                    {item.date && <span className="engagement-date">{item.date}</span>}
                    <p>{item.description}</p>
                  </div>
                ))}

              </div>

              <h3>{content.softSkillsTitle}</h3>
              <ul className="skills-list">
                {content.softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

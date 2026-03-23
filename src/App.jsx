import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import contentFr from './i18n/content.fr.json';
import contentEn from './i18n/content.en.json';
import './App.css';

function App() {
  const [language, setLanguage] = useState('fr');

  const content = useMemo(() => {
    return language === 'fr' ? contentFr : contentEn;
  }, [language]);

  useEffect(() => {
    const seo = content.seo;

    const setMetaContent = (selector, value) => {
      const tag = document.querySelector(selector);
      if (tag && value) {
        tag.setAttribute('content', value);
      }
    };

    document.documentElement.lang = seo.lang;
    document.title = seo.title;

    setMetaContent('meta[name="description"]', seo.description);
    setMetaContent('meta[name="keywords"]', seo.keywords);
    setMetaContent('meta[property="og:title"]', seo.ogTitle);
    setMetaContent('meta[property="og:description"]', seo.ogDescription);
    setMetaContent('meta[property="twitter:title"]', seo.twitterTitle);
    setMetaContent('meta[property="twitter:description"]', seo.twitterDescription);

    const structuredDataScript = document.querySelector('#person-ld-json');
    if (structuredDataScript) {
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Arthur BLAMART',
        jobTitle: seo.structuredData.jobTitle,
        description: seo.structuredData.description,
        url: 'https://arthurblamart.fr',
        email: 'arthur.blamart.dev@gmail.com',
        telephone: '+33770468083',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lannion',
          addressCountry: 'France'
        },
        sameAs: [
          'https://fr.linkedin.com/in/arthur-blamart-081ba9294',
          'https://github.com/Arthur-Blamart'
        ]
      };

      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
  }, [content]);

  return (
    <div className="App">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        content={content.header}
      />
      <Presentation content={content.presentation} />
      <About content={content.about} />
      <Skills content={content.skills} />
      <Projects content={content.projects} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </div>
  );
}

export default App;

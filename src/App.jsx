import React, { useMemo, useState } from 'react';
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

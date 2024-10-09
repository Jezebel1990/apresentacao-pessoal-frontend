import React from 'react';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Banner from './components/Banner.jsx';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Nav/>
      <Banner/>
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App

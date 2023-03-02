import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* <section>Sección de tecnologías</section> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;

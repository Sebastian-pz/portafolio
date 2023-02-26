import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      {/* <section>Sección de tecnologías</section> */}
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;

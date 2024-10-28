// App.js
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Carriers from './components/Carriers';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className='container'>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#carriers">Carriers</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
        </nav>
      </header>

      <main className='container'>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="carriers">
          <Carriers />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        {/* <section id="contact">
          <Contact />
        </section> */}
      </main>

      <footer className='container'>
        <div>Copyright © hyunji-ok</div>
      </footer>
    </div>
  );
}

export default App;
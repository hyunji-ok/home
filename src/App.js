// App.js
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import './App.css';
import Home from './components/main/Home';
import About from './components/main/About';
import Carriers from './components/main/Carriers';
import Products from './components/main/Products';
import Skills from './components/main/Skills';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header css={headerStyle}>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#carriers">Carriers</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#skills">Skills</a></li>
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
        </nav>
      </header>

      <main css={mainStyle}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="carriers">
          <Carriers />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="skills">
          <Skills />
        </section>
        {/* <section id="contact">
          <Contact />
        </section> */}
      </main>

      <footer css={footerStyle}>
        <div>Copyright © hyunji-ok</div>
      </footer>
    </div>
  );
}

const headerStyle = css`
  /* max-width: var(--max-width);
  margin: auto; */
  
  nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    padding: 5px;
    margin: 0 5px;
    font-size: 1.5rem;
  }

  nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const mainStyle = css`
  max-width: var(--max-width);
  margin: auto;
  padding-top: 60px; // 고정 헤더를 위한 여백 추가

  section {
    padding: 60px 0 0;
    text-align: center;
  }
`;

const footerStyle = css`
  /* max-width: var(--max-width); */
  margin: 30px auto 0;
  display: flex;
  div {
    margin: auto;
  }
`;

export default App;
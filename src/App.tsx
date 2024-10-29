// App.js
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import './App.css';
import Home from 'components/pages/main/Home';
import About from 'components/pages/main/About';
import Carriers from 'components/pages/main/Carriers';
import Products from 'components/pages/main/Products';
import Skills from 'components/pages/main/Skills';
import { Link } from 'react-router-dom';
// import Contact from './components/Contact';

const sections = [
  { id: 'home', component: Home },
  { id: 'about', component: About },
  { id: 'carriers', component: Carriers },
  { id: 'products', component: Products },
  { id: 'skills', component: Skills }
];

function App() {
  return (
    <div className="App">
      <header css={headerStyle}>
        <nav>
          <ul>
            <li>
              <Link to="/home">main</Link>
            </li>
            <li>
              <Link to="https://github.com/hyunji-ok" target='_blank'>github</Link>
            </li>
            <li>
              <Link to="https://blog.naver.com/hyunjiok10" target='_blank'>blog</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main css={mainStyle}>
        {sections.map(({ id, component: Component }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
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
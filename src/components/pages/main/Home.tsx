
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

function Home() {
  return (
    <div className="home" css={homeStyle}>
      <h1>Hyunji Ok의 홈페이지</h1>
      <p>저의 홈페이지에 오신 것을 환영합니다.</p>
      {/* <button>Learn More</button> */}
    </div>
  );
}

const homeStyle = css`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    padding: 10px 20px;
    background-color: var(--accent-color);
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default Home;
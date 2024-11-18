/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

  
function Tmb() {
  return (
    <div>
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
        <Container maxWidth="md">
          {/* 소개 */}
          <Box sx={{padding: '60px 0 0'}} textAlign="center">
            <h1>
              product info
            </h1>
          </Box>

          {/* Project Overview */}
          <Box my={8}>
            <h2>
              개요
            </h2>
            <ul>
              <li>이 웹사이트는 텍스트로 이야기 하는 것을 목적으로 만들어 졌습니다.</li>
              <li>React를 사용하여 구현했습니다.</li>
            </ul>
          </Box>

          {/* Features */}
          <Box my={8}>
            <h2>
              주요 기능
            </h2>
            <ul>
              <li>로그인, 회원가입, 글 작성, 글 수정, 글 삭제, 글 읽기</li>
            </ul>
          </Box>

          {/* Technologies */}
          <Box my={8}>
            <h2>
              사용한 기술 스택
            </h2>
            <ul>
              <li>node: v18</li>
              <li>typescript: v4</li>
              <li>react: v18</li>
              <li>frame-work: create-react-app</li>
              <li>routing: react-router</li>
              <li>styling: css, emotion, mui</li>
              <li>test: jest, react-testing-library</li>
              <li>deploy: github pages</li>
              <li>ci/cd: github actions</li>
            </ul>
          </Box>

          {/* Challenges */}
          <Box my={8}>
            <h2>
              직면한 도전과 배운 점
            </h2>
            <ul>
              <li>cra의 기존 testing library는 새로 설치해야 함</li>
              <li>
                {`js->ts 마이그레이션`}
                <ul>
                  <li>js파일은 tsx로 모두 바꿔야 함</li>
                  <li>타입스크립트 버전을 맞춰줘야 함. 이 product 기준으로는 v4로 바꿔야 했음</li>
                </ul>
            </li>
            </ul>
          </Box>

          {/* 외부링크 */}
          <Box my={8}>
            <h2>
              바로 가기 링크
            </h2>
            <Button variant="contained" color="primary" href="https://tmb-lovat.vercel.app/" target="_blank">
              web
            </Button>
            <Button variant="contained" color="primary" href="https://tmb-lovat.vercel.app/" target="_blank" disabled>
              iOS(개발중)
            </Button>
            <Button variant="contained" color="primary" href="https://tmb-lovat.vercel.app/" target="_blank" disabled>
              Android(개발중)
            </Button>
          </Box>

        </Container>
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
  /* height: 85vh; */

  Box {
    padding: 60px 0 0;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.1rem;
    line-height: 2.0rem;
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

export default Tmb;
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

  
function PersonalHomepage() {
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
              개인 홈페이지 사이트 소개
            </h1>
            <p>
              제가 만든 개인 홈페이지 사이트를 소개하는 곳입니다.
            </p>
          </Box>

          {/* Project Overview */}
          <Box my={8}>
            <h2>
              프로젝트 개요
            </h2>
            <ul>
              <li>이 웹사이트는 개인 소개와 products를 공유하는 목적으로 개발되었습니다.</li>
              <li>React를 사용하여 구현했습니다.</li>
            </ul>
          </Box>

          {/* Features */}
          <Box my={8}>
            <h2>
              주요 기능
            </h2>
            <ul>
              <li>프로젝트 포트폴리오 목록 보기 및 상세 페이지</li>
            </ul>
          </Box>

          {/* Technologies */}
          <Box my={8}>
            <h2>
              사용한 기술 스택
            </h2>
            <ul>
              <li>이 프로젝트는 React, 그리고 Material UI를 사용하여 구축되었습니다.</li>
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
              <li>normailize는 내장된 기능이 있음</li>
              <ul>
                <li>app.css에 @import-normalize 추가함</li>
              </ul>
              
              
            </ul>
          </Box>

          {/* 외부링크 */}
          <Box my={8}>
            <h2>
              바로 가기
            </h2>
            <Button variant="contained" color="primary" href="https://hyunji-ok.github.io/home/" target="_blank">
              web
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

export default PersonalHomepage
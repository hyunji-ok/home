/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
// import Home from 'components/main/Home';
import About from 'components/main/About';
import { Container, Typography, Box, Button } from '@mui/material';


const sections = [
    { id: 'about', component: About }
];
  
function PersonalHomepage() {
  return (
    <div>
      <header css={headerStyle}>
        <nav>
          <ul>
            {sections.map(({ id, component }) => (
              <li key={id}><a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main css={mainStyle}>
        <Container maxWidth="md">
          {/* 소개 */}
          <Box my={4} textAlign="center">
            <Typography variant="h3" component="h1" gutterBottom>
              내 프로젝트 소개
            </Typography>
            <Typography variant="h6" color="textSecondary">
              웹사이트의 목적과 기능을 설명하는 페이지입니다.
            </Typography>
          </Box>

          {/* Project Overview */}
          <Box my={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              프로젝트 개요
            </Typography>
            <Typography>
              이 웹사이트는 개인 소개와 프로젝트를 공유하는 목적으로 개발되었습니다.
              React를 사용하여 구현했습니다.
            </Typography>
          </Box>

          {/* Features */}
          <Box my={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              주요 기능
            </Typography>
            <ul>
              <li>프로젝트 포트폴리오 목록 보기 및 상세 페이지</li>
              <li>사용자 의견 작성 및 업데이트</li>
            </ul>
          </Box>

          {/* Technologies */}
          <Box my={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              사용한 기술 스택
            </Typography>
            <Typography>
              이 프로젝트는 React, 그리고 Material UI를 사용하여 구축되었습니다.
            </Typography>
          </Box>

          {/* Challenges */}
          <Box my={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              직면한 도전과 배운 점
            </Typography>
            <Typography>
              ...
            </Typography>
          </Box>

          {/* 외부링크 */}
          <Box my={4} textAlign="center">
            <Button variant="contained" color="primary" href="https://github.com/yourusername/yourproject" target="_blank">
              GitHub Repository
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
  height: 85vh;


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
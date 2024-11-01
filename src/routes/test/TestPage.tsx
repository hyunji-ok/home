/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const sections = ["Section 1", "Section 2", "Section 3"];

function TestPage() {
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useMediaQuery('(max-width:800px)');

  // Scroll Event Listener (to detect active section based on scroll position)
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (let i = 0; i < sections.length; i++) {
      const sectionElement = document.getElementById(sections[i]);
      if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Box css={styles.container}>
      <AppBar position="fixed" css={styles.header}>
        <Toolbar>
          <Typography variant="h6" css={styles.title}>My Documentation</Typography>
          {isMobile ? (
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" css={styles.link}>GitHub</a>
              <input type="text" placeholder="Search..." css={styles.search} />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box css={styles.mainContent}>
        {!isMobile && (
          <Box css={styles.leftMenu}>
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                css={[styles.menuLink]}
              >
                {section}
              </a>
            ))}
          </Box>
        )}

        <Box css={styles.content}>
          {sections.map((section, index) => (
            <Box id={section} key={index} css={styles.section}>
              <Typography variant="h4">{section}</Typography>
              <Typography>
                <p>
                    Content for {section}
                </p>
                <p>
                    Content for {section}
                </p>
                <p>
                    Content for {section}
                </p>
                <p>
                    Content for {section}
                </p>
                <p>
                    Content for {section}
                </p>
                <p>
                    Content for {section}
                </p>
                <p>
                    Content for {section}
                </p>
                <p>
                    Content for {section}
                </p>
                                <p>
                    Content for {section}
                </p>
                <p>
                    Content for {section}
                </p>
              </Typography>
            </Box>
          ))}
        </Box>

        {!isMobile && (
          <Box css={styles.rightSections}>
            {sections.map((section) => (
              <Typography
                key={section}
                css={[styles.sectionTitle, activeSection === section && styles.activeSectionTitle]}
              >
                {section}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

// CSS using Emotion
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
  `,
  header: css`
    z-index: 1000;
  `,
  title: css`
    flex-grow: 1;
  `,
  link: css`
    color: white;
    text-decoration: none;
  `,
  search: css`
    padding: 4px;
    border-radius: 4px;
    border: none;
    outline: none;
  `,
  mainContent: css`
    display: flex;
    margin-top: 64px; /* Height of the AppBar */
  `,
  leftMenu: css`
    position: fixed;
    width: 200px;
    top: 64px;  /* 헤더 높이 */
    bottom: 0;
    overflow-y: auto;  /* 독립적인 스크롤 적용 */
    background-color: #f0f0f0;
    padding: 16px;
  `,
  menuLink: css`
    display: block;
    padding: 8px;
    color: #333;
    text-decoration: none;
    &:hover {
      background-color: #ddd;
    }
  `,
  activeMenuLink: css`
    font-weight: bold;
  `,
  content: css`
    flex-grow: 1;
    padding: 50px;
    margin-left: 216px;
    margin-right: 216px;
  `,
  section: css`
    margin-bottom: 40px;
  `,
  rightSections: css`
    position: fixed;
    right: 0;
    width: 200px;
    top: 64px;
    bottom: 0;
    overflow-y: auto;
    padding: 16px;
    background-color: #f8f8f8;
  `,
  sectionTitle: css`
    padding: 8px;
    color: #666;
  `,
  activeSectionTitle: css`
    font-weight: bold;
    color: #000;
  `,
};

export default TestPage;
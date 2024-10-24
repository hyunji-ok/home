import React from 'react';
import about from '../images/about_1280.jpg'

function About() {
  return (
    <div className="about">
      <img src={about} alt="Profile" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>프론트엔드 개발자입니다.</p>

        <div>경력사항</div>
        <ul>
          <li>성원 애드피아</li>
          <li>플래티어</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
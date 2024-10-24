import React from 'react';
import sample from '../images/sample_1280.jpg'

function About() {
  return (
    <div className="about">
      <img src={sample} alt="Profile" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>프론트엔드 개발자입니다.</p>

        <div>경력사항</div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
import React from 'react';
import about from '../images/about_1280.jpg'

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className='about-item'>
        <img src={about} alt="Profile" />
        <div className="about-text">
          <p>프론트엔드 개발자입니다.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
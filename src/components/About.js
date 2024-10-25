import React from 'react';
import about from '../images/about_1280.jpg'

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className='about-item'>
        <img src={about} alt="Profile" />
        <div className="about-text">
          <p>
            다음과 같은 점을 중요하게 생각합니다.
          </p>
          <ol>
              <li>의사소통: 시각화(UML)를 통한 의사소통, 협업도구(지라, 컨플루언스)등을 이용한 의사소통</li>
              <li>성과 관리: KPI를 통한 수치화된 정량적인 평가</li>
              <li>품질: 테스트 코드를 통한 품질 개선</li>
              <li>자기개발: 공식문서 읽기, 기술 블로그 찾아보기, 책 읽기</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
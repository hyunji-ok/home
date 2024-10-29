/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCreatereactapp } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import zustandImg from 'assets/images/zustand.jpeg'
import { SiRecoil } from "react-icons/si";
// import { SiChakraui } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { SiGithubpages } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";

function Skills() {
  return (
    <div className="skills" css={skillsStyle}>
      <h2>Skills</h2>
      <div className="skill-items">
        {/* front core three */}
        <div className="item">
          <FaHtml5 size={50} color='#DC4B26'/>
          <div>html</div>
        </div>
        <div className="item">
          <FaCss3Alt size={50} color='#0270B2'/>
          <div>css</div>
        </div>
        <div className="item">
          <FaJs size={50} color='#E5C410'/>
          <div>js</div>
        </div>

        {/* react core */}
        <div className="item">
          <FaReact size={50} color='#5DD4F5'/>
          <div>react</div>
        </div>

        {/* react 프로젝트 생성 도구 */}
        <div className="item">
          <SiCreatereactapp size={50} color='#07CDA7'/>
          <div>cra</div>
        </div>
        <div className="item">
          <RiNextjsFill size={50} color='#000000'/>
          <div>next.js</div>
        </div>

        {/* react routing */}
        {/* react-router */}

        {/* react 상태 관리 */}
        <div className="item">
          <img src={zustandImg} style={{width: "50px", height: "50px"}} alt='zustand-image'/>
          <div>zustand</div>
        </div>
        <div className="item">
          <SiRecoil size={50} color='#000000'/>
          <div>recoil</div>
        </div>

        {/* react 스타일링 */}
        {/* <div className="item">
          <SiChakraui size={50} color='#6BC4CA'/>
          <div>chakra ui</div>
        </div> */}
        <div className="item">
          <SiMui size={50} color='#027BF8'/>
          <div>mui</div>
        </div>

        {/* react 폼 관리 */}
        {/* React Hook Form */}

        {/* react 데이터 페칭 */}
        <div className="item">
          <SiAxios size={50} color='#5828DD'/>
          <div>axios</div>
        </div>
        {/* React Query */}
        {/* SWR */}

        {/* react 테스팅 */}
        <div className="item">
          <SiJest size={50} color='#954057'/>
          <div>jest</div>
        </div>
        <div className="item">
          <SiTestinglibrary size={50} color='#D8342E'/>
          <div>testing library</div>
        </div>

        {/* react 전역 데이터 관리 */}
        {/* Apollo Client */}
        {/* Relay */}

        {/* 배포 */}
        <div className="item">
          <SiGithubpages size={50}/>
          <div>github pages</div>
        </div>

        {/* ci/cd */}
        <div className="item">
          <SiGithubactions size={50} color='#1F84F8'/>
          <div>github actions</div>
        </div>

      </div>
    </div>
  );
}

const skillsStyle = css`
  width: 95%;
  margin: 0 auto;
  max-width: 800px;
  .skill-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .item {
    width: 100px;
    aspect-ratio: 1/1;
    margin: 5px;
    padding: 5px;
  }
`;
export default Skills;
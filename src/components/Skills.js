import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCreatereactapp } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import zustandImg from '../images/zustand.jpeg'
import { SiRecoil } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiMui } from "react-icons/si";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-items">
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
        <div className="item">
          <FaReact size={50} color='#5DD4F5'/>
          <div>react</div>
        </div>
        <div className="item">
          <SiCreatereactapp size={50} color='#07CDA7'/>
          <div>cra</div>
        </div>
        <div className="item">
          <RiNextjsFill size={50} color='#000000'/>
          <div>next.js</div>
        </div>
        <div className="item">
          <img src={zustandImg} style={{width: "50px", height: "50px"}} alt='zustand-image'/>
          <div>zustand</div>
        </div>
        <div className="item">
          <SiRecoil size={50} color='#000000'/>
          <div>recoil</div>
        </div>
        <div className="item">
          <SiChakraui size={50} color='#6BC4CA'/>
          <div>chakra</div>
        </div>
        <div className="item">
          <SiMui size={50} color='#027BF8'/>
          <div>mui</div>
        </div>
        {/* <i className="fab fa-js-square"></i> */}
      </div>
    </div>
  );
}

export default Skills;
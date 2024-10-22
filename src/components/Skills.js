import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-icons">
        <div>
          <FaHtml5 size={50}/>
          <div>html</div>
        </div>
        <div>
          <FaCss3Alt size={50}/>
          <div>css</div>
        </div>
        <div>
          <FaReact size={50}/>
          <div>react</div>
        </div>
        <div>
          <RiNextjsFill size={50}/>
          <div>next.js</div>
        </div>
        {/* <i className="fab fa-js-square"></i> */}
      </div>
    </div>
  );
}

export default Skills;
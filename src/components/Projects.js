import React from 'react';
import project1 from '../images/project1_1280.jpg'
import project2 from '../images/project2_1280.jpg'
import AlertDialog from './common/dialog';
// import project3 from '../images/project3_1280.jpg'
// import project4 from '../images/project4_1280.jpg'
// import project5 from '../images/project5_1280.jpg'
// import project6 from '../images/project6_1280.jpg'

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        <AlertDialog>
          <div className="card">
            <img src={project1} alt="Project 1" />
            <h3>Project 1</h3>
            <p>Description of the project...</p>
          </div>
        </AlertDialog>
        
        <AlertDialog>
          <div className="card">
            <img src={project2} alt="Project 2" />
            <h3>Project 2</h3>
            <p>Description of the project...</p>
          </div>
        </AlertDialog>
        
        {/* <div className="card">
          <img src={project3} alt="Project 3" />
          <h3>Project 3</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src={project4} alt="Project 4" />
          <h3>Project 4</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src={project5} alt="Project 5" />
          <h3>Project 5</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src={project6} alt="Project 6" />
          <h3>Project 6</h3>
          <p>Description of the project...</p>
        </div> */}
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default Projects;
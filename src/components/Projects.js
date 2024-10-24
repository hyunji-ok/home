import React from 'react';
import sample from '../images/sample_1280.jpg'

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="card">
          <img src={sample} alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src={sample} alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src={sample} alt="Project 3" />
          <h3>Project 3</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src={sample} alt="Project 4" />
          <h3>Project 4</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src={sample} alt="Project 5" />
          <h3>Project 5</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src={sample} alt="Project 6" />
          <h3>Project 6</h3>
          <p>Description of the project...</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default Projects;
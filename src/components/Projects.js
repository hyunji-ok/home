import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="card">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of the project...</p>
        </div>
        <div className="card">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of the project...</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default Projects;
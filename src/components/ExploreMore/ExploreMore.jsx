import React from 'react';
import './exploreMore.scss';

const ExploreMore = () => {
  return (
    <div className="explore-more">
      <div className="container">
        <h1>Explore More Projects</h1>
        <div className="projects">
          <div className="project">
            <img src="https://example.com/project1.png" alt="Project 1" />
            <h2>Project Title 1</h2>
            <p>Description of project 1.</p>
          </div>
          <div className="project">
            <img src="https://example.com/project2.png" alt="Project 2" />
            <h2>Project Title 2</h2>
            <p>Description of project 2.</p>
          </div>
          <div className="project">
            <img src="https://example.com/project3.png" alt="Project 3" />
            <h2>Project Title 3</h2>
            <p>Description of project 3.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;

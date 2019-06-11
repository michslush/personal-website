import React from 'react';

const CodeCapstone = () => {
  return (
    <div>
      <h3>Code Aloud</h3>
      <div className="project-content">
        <h4>
          View the deployed site at{' '}
          <a
            color="inherit"
            href="https://codealoud.herokuapp.com/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            www.codealoud.gq
          </a>
        </h4>
        <h4>
          View the GitHub repo{' '}
          <a
            color="inherit"
            href="https://github.com/codecapstone/codealoud"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            here
          </a>
        </h4>
        <h4>
          Technology Used: Node, Express, PostgreSQL, Sequelize, React, Redux,
          Annyang, Recharts, CodeSandbox, Jest, Mocha, Chai, Heroku, Travis CI
        </h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nZpv5FfNUeI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div id="projects-container" className="body-container">
      <h1>Projects</h1>
      <div id="projects">
        <CodeCapstone />
      </div>
    </div>
  );
};

export default Projects;

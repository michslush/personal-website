import React from 'react';

const CodeCapstone = () => {
  return (
    <div className="individual-project">
      <h2>Code Aloud</h2>
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
            HERE
          </a>
        </h4>
        <h4>
          Technology Used: Node, Express, PostgreSQL, Sequelize, React, Redux,
          Annyang, Recharts, CodeSandbox, Jest, Mocha, Chai, Heroku, Travis CI
        </h4>
        <h4>Teammates: Allison French, Jennifer Grange, Rashmi Prakash</h4>
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

const GraceShopper = () => {
  return (
    <div className="individual-project">
      <h2>Cloud Nine</h2>
      <div className="project-content">
        <h4>
          View the deployed site at{' '}
          <a
            color="inherit"
            href="https://cl0udnine.herokuapp.com/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            cl0udnine.com
          </a>
        </h4>
        <h4>
          View the GitHub repo{' '}
          <a
            color="inherit"
            href="https://github.com/team-myrel/cl0udnine"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
        <h4>
          Technology Used: Node, Express, PostgreSQL, Sequelize, React, Redux,
          Mocha, Chai, Heroku, Travis CI
        </h4>
        <h4>Teammates: Rashmi Prakash, Lerena Holloway, Lisa Jakubczyk</h4>
        <img src="cloudnine.png" alt="Cloud Nine" width="100%" />
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
        <GraceShopper />
      </div>
    </div>
  );
};

export default Projects;

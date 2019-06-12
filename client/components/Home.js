import React from 'react';

export const Home = () => {
  return (
    <div className="body-container">
      <div className="my-photo">
        <img src="michaela_linkedIn_photo.jpg" alt="Photo of Me" width="100%" />
      </div>
      <div id="bullets">
        <p>Saint Michael's College Alumn</p>
        <p>Former Calculus Teacher</p>
        <p>Grace Hopper Program at Fullstack Academy of Code Alumn</p>
        <p>
          Currently a Teaching Fellow at{' '}
          <a
            href="https://www.gracehopper.com/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            Grace Hopper
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;

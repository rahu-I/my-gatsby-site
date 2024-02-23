import * as React from 'react';
import './index.scss';

const Bio = () => {
  return (
    <section>
      <h3 className="bio_greet fs-16 fw-regular ff-mono text-yellow">Hi, my name is</h3>
      <h1 className="name appear_from_bottom">Rahul Agarwal.</h1>
      <p className="desc appear_from_bottom">
        I am a Software Engineer from India, working in web development. Currently, I’m focused on building beautiful,
        user friendly products at
        <a href="https://www.velotio.com/" target="_blank" rel="noreferrer" className="company_link">
          Velotio Technologies
        </a>
        .
      </p>
    </section>
  );
};

export default Bio;

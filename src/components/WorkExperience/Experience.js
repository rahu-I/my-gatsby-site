import React from 'react';
import './index.scss';

const Experience = ({ title, company, duration, points, link }) => {
  return (
    <div>
      <h3>
        {title}&nbsp;
        <span className="text-yellow">
          @
          {link ? (
            <a href={link} target="_blank" rel="noreferrer" className="work_exp_company_link">
              {company}
            </a>
          ) : (
            company
          )}
        </span>
      </h3>
      <p className="ff-mono text-lightest-slate fs-13">{duration}</p>
      <ul className="work_exp_points">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

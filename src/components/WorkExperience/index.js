import React, { useState } from 'react';
import './index.scss';
import SectionHeading from '../common/SectionHeading';
import Experience from './Experience';
import { experiences } from './constants';
import classNames from 'classnames';

const WorkExperience = () => {
  const [selectedExp, setSelectedExp] = useState(experiences[0]);
  const [position, setPosition] = useState({
    offsetLeft: 0,
    offsetWidth: 0,
  });

  const { title, company, duration, points } = selectedExp;

  return (
    <section className="work_exp_section">
      <SectionHeading order="2" heading="Where I've worked" />
      <div className="exp_and_tabs">
        <div role="tablist" aria-label="Job tabs" className="tabs_container">
          {experiences.map((exp, index) => (
            <button
              key={`tab-${index}`}
              role="tab"
              className={classNames('exp_tabs', { 'exp_tabs--selected': exp.id === selectedExp.id })}
              onClick={() => {
                setSelectedExp(exp);
              }}
            >
              {exp.company}
            </button>
          ))}
          <div className="tab_highlight" style={{ top: `${(selectedExp.id - 1) * 42}px` }} />
        </div>
        <Experience {...{ title, company, duration, points, ...selectedExp }} />
      </div>
    </section>
  );
};

export default WorkExperience;

import React from 'react';
import { skills } from './skills';
import './index.scss';

const SkillsBadge = () => {
  return (
    <section style={{ margin: '0px' }}>
      <h3 className="skills_title">Some Technologies I've been working with recently</h3>
      <div className="container">
        {skills.map((skill, index) => (
          <button key={index} className="skills_badge">
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SkillsBadge;

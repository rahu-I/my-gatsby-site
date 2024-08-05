import React from 'react';
import './index.scss';

const SectionHeading = ({ heading, order }) => {
  return (
    <h2 className="fs-32 heading">
      <span>
        <span className="text-yellow ff-mono fs-22">0{order}.</span>
        {heading}
      </span>
    </h2>
  );
};

export default SectionHeading;

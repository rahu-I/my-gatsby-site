import React from 'react';

const SectionHeading = ({ heading, order }) => {
  return (
    <h2 className="fs-32">
      <span className="text-yellow ff-mono fs-22">{order}</span>
      {heading}
    </h2>
  );
};

export default SectionHeading;

import * as React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import WorkExperience from '../components/WorkExperience';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <Bio />
        <WorkExperience />
        {/* <div style={{ background: 'white', height: '800px', width: '400px' }}></div> */}
      </main>
    </>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;

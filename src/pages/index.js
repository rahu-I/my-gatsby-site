import * as React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <Bio />
        {/* <div style={{ background: 'white', height: '800px', width: '400px' }}></div> */}
      </main>
    </>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;

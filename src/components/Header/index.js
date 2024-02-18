import React, { useState } from 'react';
import Button from '../common/Button';
import * as styles from './index.module.scss';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <header className={styles.header}>
      <Button className={styles.logo}>RA</Button>
      <Navbar />
      <SideDrawer isOpen={showDrawer} />
      <button className={styles.ham_btn} onClick={() => setShowDrawer(!showDrawer)}>
        <span className="sr-only">Menu</span>
        <div className={styles.ham_box}>
          <div className={styles.ham_box_inner} />
        </div>
      </button>
    </header>
  );
};

export default Header;

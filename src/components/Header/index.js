import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../common/Button';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import './index.scss';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <header className="header">
      <Button className="logo">RA</Button>
      <Navbar />
      <SideDrawer isOpen={showDrawer} />
      <button className="ham_btn" onClick={() => setShowDrawer(!showDrawer)}>
        <span className="sr-only">Menu</span>
        <div className="ham_box">
          <div
            className={classNames('ham_box_inner ${showDrawer', {
              'ham_box_inner--open': showDrawer,
            })}
          />
        </div>
      </button>
    </header>
  );
};

export default Header;

import React, { useEffect } from 'react';
import classnames from 'classnames';
import './index.scss';

const SideDrawer = ({ isOpen }) => {
  return (
    <aside
      className={classnames('drawer', {
        [isOpen ? 'drawer_visible' : 'drawer_hidden']: true,
      })}
    ></aside>
  );
};

export default SideDrawer;

import React from 'react';
import { Link } from 'gatsby';
import Button from '../../common/Button';
import * as styles from './index.module.scss';

const navItems = [
  {
    label: 'About',
    link: '',
  },
  {
    label: 'Experience',
    link: '',
  },
  {
    label: 'Projects',
    link: '',
  },
  {
    label: 'Contact',
    link: '',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ol role="list" className={styles.ordered_list}>
        {navItems.map(({ label, link }, i) => (
          // index as a key is fine here as list is constant/unchanging
          <li key={i}>
            <span aria-hidden="true" className={styles.nav_link_count}>
              0{i}
            </span>
            <Link to={link} className={styles.nav_link}>
              {label}
            </Link>
          </li>
        ))}
      </ol>
      <Button>Resume</Button>
    </nav>
  );
};

export default Navbar;

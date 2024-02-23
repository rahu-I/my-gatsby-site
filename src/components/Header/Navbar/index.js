import React from 'react';
import { Link } from 'gatsby';
import Button from '../../common/Button';
import './index.scss';

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
    <nav className="nav">
      <ol className="ordered_list">
        {navItems.map(({ label, link }, i) => (
          // index as a key is fine here as list is constant/unchanging
          <li key={i}>
            <span aria-hidden="true" className="ff-mono text-yellow fs-12 user-select-none">
              0{i}
            </span>
            <Link to={link} className="nav_link ff-mono fs-14 text-slate text-hover-yellow">
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

import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import Modal from './Modal';
import Logo from '../../assets/SVG/Logo';

import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <>
      <nav className={`${styles.wrapper} ${styles.general}`}>
        <div className={styles.left}>
          <Link
            to="/"
            className={
              location.pathname === '/'
                ? styles.selected
                : ''
            }
          >
            <div className={styles.logo}>
              <Logo />
            </div>
          </Link>

          <Link
            to="/mission"
            className={
              location.pathname === '/mission'
                ? styles.selected
                : ''
            }
          >
            MISSION
          </Link>

          <Link
            to="/take-action"
            className={
              location.pathname === '/take-action'
                ? styles.selected
                : ''
            }
          >
            TAKE ACTION
          </Link>

          <Link
            to="/contact"
            className={
              location.pathname === '/contact'
                ? styles.selected
                : ''
            }
          >
            CONTACT
          </Link>
        </div>

        <div className={styles.right}>
          <a
            href="https://secure.winred.com/elect-common-sense/website?utm_medium=website"
            className={styles.link}
          >
            DONATE
          </a>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className={`${styles.mobileWrapper} ${styles.general}`}>
        <Link
          to="/"
          className={
            location.pathname === '/'
              ? styles.selected
              : ''
          }
        >
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>

        {/* mobile hamburger */}
        <Hamburger toggled={open} toggle={setOpen} rounded />

        {/* mobile modal nav menu */}
        <Modal open={open} setOpen={setOpen} />
          
        <a
          href="https://secure.winred.com/elect-common-sense/website?utm_medium=website"
          className={styles.link}
        >
          DONATE
        </a>
      </nav>
    </>
  );
}

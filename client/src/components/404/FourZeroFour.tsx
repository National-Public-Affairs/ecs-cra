import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FourZeroFour.module.css';

export default function FourZeroFour() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>404</h1>
        <h6>page not found</h6>
        <Link to='/'>
          <button>Return home</button>
        </Link>
      </div>
    </div>
  );
}

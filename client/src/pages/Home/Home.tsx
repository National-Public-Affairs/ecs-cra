import React from 'react';
import Letter from '../../components/Letter/Letter';
import LogoAlternate from '../../assets/SVG/LogoAlternate';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={`page ${styles.wrapper}`}>
      <div className={styles.logo}>
        <LogoAlternate />
      </div>
      <Letter />
    </div>
  );
}

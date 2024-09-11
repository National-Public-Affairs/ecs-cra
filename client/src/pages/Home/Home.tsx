import React from 'react';
import Letter from '../../components/Letter/Letter';
import LogoAlternate from '../../assets/SVG/LogoAlternate';
import Stars from '../../components/Stars/Stars';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoAlternate />
      </div>
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          <h1>Elect Common Sense Candidates in New Jersey</h1>
          <Stars />
          <div className={styles.subheadingWrapper}>
            <div>
              <div className={styles.subheading}>Tired of Liberal Lunacy?</div>
              <div className={styles.cta}>
                Help up get Common Sense from the ballot into office
              </div>
            </div>
            <a href="https://secure.winred.com/elect-common-sense/website?utm_medium=website">
              <button>Donate</button>
            </a>
          </div>
          <div className={styles.explanation}>
            Elect Common Sense is a PAC that provides grassroots support and financial backing to elect like-minded, Common Sense candidates in New Jersey from School Board to Governor.
          </div>
        </div>
      </div>
      <Letter />
    </div>
  );
}

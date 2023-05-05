import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Endorsements.module.css';

export default function Endorsements() {
  return (
    <div className="page">
      <Header
        redText="ENDORSEMENTS"
        whiteText=""
        children={[]}
      />

      <div className={styles.wrapper}>
        <h3>
          Candidates Who Get It
        </h3>

        <p>
          Elect Common Sense is proud to stand behind these excellent candidates. We share a common vision for a more affordable New Jersey. A New Jersey that supports parents and children. A New Jersey that stands up to the radical left. A New Jersey that can take back our state once and for all.
        </p>
      </div>
    </div>
  );
}

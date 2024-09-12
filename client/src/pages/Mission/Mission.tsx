import React from 'react';

import Header from '../../components/Header/Header';

import styles from './Mission.module.css';

export default function Mission() {
  return (
    <div className="page">
      <Header
        whiteText="The Mission"
        children={[
          <div className='subheading'>
            Time for New Leadership. It's just Common Sense.
          </div>
        ]}
      />
      <div className='page-content'>
        <div className={styles.mission}>
          Elect Common Sense is a PAC that provides grassroots support and financial backing to elect like-minded, Common Sense candidates in New Jersey from School Board to Governor.
        </div>
        <div className={styles.list}>
          <div>Together, we will:</div>
          <ol>
            <li>
              <span>Identify </span>
              Common Sense Candidates for every office from School Board to Governor.
            </li>
            <li>
              <span>Empower </span>
              Common Sense Candidates to WIN with our grassroots support and financial backing.
            </li>
            <li>
              <span>Elect </span>
              Common Sense Candidates to start turning New Jersey back to common sense.
            </li>
          </ol>
        </div>

        <div className={styles.list}>
          <div>With your help, New Jersey will no longer:</div>
          <ul>
            <li>
              Allow Trenton to overtax us and over-regulate us
            </li>
            <li>
              Spread woke culture in our schools and strip away parental rights
            </li>
            <li>
              Settle for the same failed insider politicians
            </li>
            <li>
              Accept failure at the ballot box every November
            </li>
          </ul>
        </div>
        <div className={`${styles.mission} ${styles.second}`}>
          Taking back New Jersey from Left Wing Lunacy starts with us – the Common Sense Majority.
        </div>
      </div>
    </div>
  );
}

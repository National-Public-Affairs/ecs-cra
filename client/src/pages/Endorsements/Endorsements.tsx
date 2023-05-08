import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import Header from '../../components/Header/Header';
import AdvisorCard from '../../components/AdvisorCard/AdvisorCard';
import edDurr from '../../assets/Edward-Durr.jpg';
import styles from './Endorsements.module.css';
import cardStyles from '../Advisors/Advisors.module.css';

const pageData = [
  <AdvisorCard
    img={edDurr}
    name="Edward Durr"
    title="NJ State Senator"
    subtitle="3rd District"
  />
];

export default function Endorsements() {
  const trail = useTrail(1, {
    config: { mass: 1, tension: 150, friction: 100, duration: 250 },
    from: {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  });

  return (
    <div className="page">
      <Header
        redText="CANDIDATES"
        whiteText="WHO GET IT"
        children={[]}
      />

      <div className={styles.wrapper}>
        <p>
          Elect Common Sense is proud to stand behind these excellent candidates. We share a common vision for a more affordable New Jersey. A New Jersey that supports parents and children against the left's woke agenda. A New Jersey that stands up to the radical left. A New Jersey that can take back our state once and for all.
        </p>

        <div className={cardStyles.wrapper}>
          {
            trail.map((props, idx) => (
              <animated.div
                className={cardStyles.item}
                style={{ ...props }}
              >
                {pageData[idx]}
              </animated.div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

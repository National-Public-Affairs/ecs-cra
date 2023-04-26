import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Bank from '../../assets/SVG/Bank';
import School from '../../assets/SVG/School';
import BallotBox from '../../assets/SVG/BallotBox';
import Megaphone from '../../assets/SVG/Megaphone';
import PiggyBank from '../../assets/SVG/PiggyBank';
import NJ from '../../assets/SVG/NJ';
import Ballot from '../../assets/SVG/Ballot';
import People from '../../assets/SVG/People';
import styles from './Mission.module.css';

const firstSectionData = [
  <Tile
    icon={<PiggyBank fillColor="#3a3393" />}
    text="Allow Trenton to overtax us and over-regulate us"
  />,
  <Tile
    icon={<School fillColor="#3a3393" />}
    text="Spread woke culture in our schools and strip away our rights"
  />,
  <Tile
    icon={<Bank fillColor="#3a3393" />}
    text="Settle for the same failed insider politicians"
  />,
  <Tile
    icon={<BallotBox fillColor="#3a3393" />}
    text="Accept failure at the ballot box every November"
  />,
];

const secondSectionData = [
  <Tile
    icon={<NJ fillColor="#ef0b2e" />}
    text="Engage outsiders ready to take our state back"
  />,
  <Tile
    icon={<Megaphone fillColor="#ef0b2e" />}
    text="Amplify our voices to make sure the insider politicians hear us"
  />,
  <Tile
    icon={<People fillColor="#ef0b2e" />}
    text="End 'business as usual' in Trenton and return power to the people"
  />,
  <Tile
    icon={<Ballot fillColor="#ef0b2e" />}
    text="Elect Common Sense"
  />,
];

function Content() {
  const trail = useTrail(4, {
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
    <div className={styles.wrapper}>
      <p className={`${styles.purpleText} bold`}>
        With your help, New Jersey will no longer:
      </p>

     <div className={styles.tileGroup}>
       {
        trail.map((props, idx) => (
          <animated.div
            className={styles.item}
            style={{ ...props, border: '5px solid #3a3393' }}
          >
            {firstSectionData[idx]}
          </animated.div>
        ))
       }
     </div>

      <p className={`${styles.purpleText} bold`}>
        Together, we will:
      </p>

      <div className={styles.tileGroup}>
        {
          trail.map((props, idx) => (
            <animated.div
              className={styles.item}
              style={{ ...props, border: '5px solid #ef0b2e' }}
            >
              {secondSectionData[idx]}
            </animated.div>
        ))
        }
      </div>
    </div>
  );
}

export default function Mission() {
  return (
    <div className="page">
      <Header
        redText="OUR"
        whiteText="MISSION"
        children={[]}
      />

      <Content />
    </div>
  );
}

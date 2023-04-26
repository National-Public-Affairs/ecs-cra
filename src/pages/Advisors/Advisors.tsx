import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import Header from '../../components/Header/Header';
import AdvisorCard from '../../components/AdvisorCard/AdvisorCard';
import Crimi from '../../assets/John-Crimi.jpg';
import Dimemmo from '../../assets/Guy-Dimemmo.jpeg';
import Gill from '../../assets/Rob-Gill.jpg';
import Mabey from '../../assets/Sean-Mabey.jpg';
import Nader from '../../assets/Elizabeth-Nader.jpg';
import Nardolillo from '../../assets/Greg-Nardolillo.png';
import Gilmore from '../../assets/George-Gilmore.jpg';
import styles from './Advisors.module.css';

const pageData = [
  <AdvisorCard
    img={Nader}
    name="Elizabeth Nader"
    title="Chair"
    subtitle=" "
  />,
  <AdvisorCard
    img={Gilmore}
    name="George Gilmore"
    title="Senior Advisor, Elect Common Sense"
    subtitle="Chairman, Ocean County GOP"
  />,
  <AdvisorCard
    img={Gill}
    name="Rob Gill"
    title="CEO & Founder"
    subtitle="EPIC Financial Strategies"
  />,
  <AdvisorCard
    img={Mabey}
    name="Sean Mabey"
    title="President"
    subtitle="M&B Trucking"
  />,
  <AdvisorCard
    img={Crimi}
    name="John Crimi"
    title="Owner"
    subtitle="County Concrete Corporation"
  />,
  <AdvisorCard
    img={Nardolillo}
    name="Greg Nardolillo"
    title="Owner & Founder"
    subtitle="WealthPlan Advantage"
  />,
  <AdvisorCard
    img={Dimemmo}
    name="Guy DiMemmo"
    title="Founder & CEO"
    subtitle="Visual Computer Solutions Inc."
  />,
];

export default function Advisors() {
  const trail = useTrail(7, {
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
        redText="ADVISORS"
        whiteText=""
        children={[]}
      />

      <div className={styles.wrapper}>
        {
          trail.map((props, idx) => (
            <animated.div
              className={styles.item}
              style={{ ...props }}
            >
              {pageData[idx]}
            </animated.div>
          ))
        }
      </div>
    </div>
  );
}

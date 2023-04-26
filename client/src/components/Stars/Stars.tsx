import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import Star from '../../assets/SVG/Star';
import styles from './Stars.module.css';

export default function Stars() {
  const trails = useTrail(3, {
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
      {
        trails.map((props, idx) => (
          <animated.div
            key={`key-${idx}`}
            className={styles.star}
            style={props}
          >
            <Star />
          </animated.div>
        ))
      }
    </div>
  );
}

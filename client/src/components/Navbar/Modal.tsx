import React from 'react';
import { animated, useTransition } from '@react-spring/web';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

type Props = {
  open: boolean,
  setOpen: Function,
}

export default function Modal({ open, setOpen }: Props) {
  const transitions = useTransition(open, {
    from: { bottom: '90vh', opacity: 0 },
    enter: { bottom: '0vh', opacity: 1 },
    leave: { bottom: '90vh', opacity: 0 },
  });

  return transitions((style, item) => (
    item && <animated.div className={styles.modal} style={style}>
      <Link
        to="/mission"
        className={styles.modalOption}
        onClick={() => setOpen(false)}
      >
        MISSION
      </Link>
      <Link
        to="/take-action"
        className={styles.modalOption}
        onClick={() => setOpen(false)}
      >
        TAKE ACTION
      </Link>
      <Link
        to="/contact"
        className={styles.modalOption}
        onClick={() => setOpen(false)}
      >
        CONTACT
      </Link>
    </animated.div>
  ))
}

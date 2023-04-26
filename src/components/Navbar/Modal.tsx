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
        to="/advisors"
        className={styles.modalOption}
        onClick={() => setOpen(false)}
      >
        ADVISORS
      </Link>
      {/* use /contact page for verification; reinstall this page once verification is complete */}
      {/* <a
        href="https://secure.winred.com/elect-common-sense/contact-us"
        className={styles.modalOption}
        onClick={() => setOpen(false)}
      >
        CONTACT
      </a> */}
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

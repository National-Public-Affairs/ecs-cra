import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div>
        Paid for by Elect Common Sense.
        <br />
        53 South Jefferson Road, Suite L, Whippany, NJ 07981
        <br />
        This advertisement was not requested or approved by any candidate.
      </div>

      <div className={styles.disclaimer}>
        Elect Common Sense is a New Jersey Continuing Political Committee. As such, Elect Common Sense can and will make contributions to like-minded candidates throughout New Jersey. Expenditures made by the Committee are not made at the request of, or in consultation with, any candidate or candidate committee.
      </div>

      <div className={styles.linksWrapper}>
        <Link to="/terms-of-service">
          Terms of Service
        </Link>

        <Link to="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

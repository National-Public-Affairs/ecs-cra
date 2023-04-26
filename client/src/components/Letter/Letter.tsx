import React from 'react';
import logo from '../../assets/logo.png';
import headshot from '../../assets/bill-headshot.jpg';
import styles from './Letter.module.css';

export default function Letter() {
  return (
    <div className={styles.wrapper}>
      <img
        src={logo}
        alt="Elect Common Sense – NJ"
        className={styles.logo}
      />
      <p className="bold">
        Friend,
      </p>

      <p>
        Common sense: it's been in short supply in Trenton for far too long.
      </p>

      <p>
        In it's place, years of 'business as usual' in our State Capitol have beaten New Jerseyans down into a culture of accepting the mess the insiders, special interests and failed politicians have created.
      </p>

      <p>
        They all think we're powerless to challenge Trenton, to fight for change and to bring common sense back to New Jersey.&nbsp;
        <span className="bold">Well, they're wrong.</span>
      </p>

      <p>
        Like you, we're done accepting the insiders' failure. And like you, we're ready to fight.
      </p>

      <p>
        That's why we formed&nbsp;
        <span className="bold italic">Elect Common Sense</span>.
        As the Honorary Chairman, I am proud to be guiding&nbsp;
        <span className="italic">Elect Common Sense</span>&nbsp;
        as we rewrite the rules of engagement for fighting and winning in New Jersey.
      </p>

      <br />

      <p>
        Join Us,
      </p>
      <img
        src={headshot}
        alt="Bill Spadea–Elect Common Sense"
        className={styles.headshot}
      />
      <p>
        Bill Spadea
        <br />
        Honorary Chairman
        <br />
        Elect Common Sense
      </p>

      <br />
      <br />
      <br />
    </div>
  );
}

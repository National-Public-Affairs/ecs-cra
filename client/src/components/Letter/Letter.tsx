import React from 'react';
import Logo from '../../assets/SVG/Logo';
import nader from '../../assets/Elizabeth-Nader.jpg';

import styles from './Letter.module.css';

export default function Letter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <img
          src={nader}
          alt="Elizabeth Nader headshot"
        />
        <p className="bold">
          A letter from our Chair,
        </p>
      </div>

      <p>Hey Common Sense New Jerseyan!</p>

      <p>Welcome! This is the place you’ve been waiting for.</p>

      <p>
        <span className='bold'>
          Common sense has been missing from Trenton – and 
          almost every elected office across New Jersey – for far too long.
        </span>{' '}
        You know it, I know it. We see it in the out of control tax-and-spend 
        mindset, broken and dysfunctional agencies, rising crime, crackdowns on 
        freedom, and indoctrination of our children. We feel like we’re shouting 
        “that’s crazy” into a void on a daily basis. Enough!
      </p>

      <p>
        Liberal lunacy has become 'business as usual' from our State Capitol to 
        our school boards. New Jerseyans have been beaten down to accept the 
        mess the insiders, special interests and failed politicians have created, 
        and all along, we’ve been the majority! Now, we’re rising up, taking 
        back the megaphone, and acting like the powerful majority coalition that 
        we are. 
      </p>

      <p>
        They all think we're powerless to challenge Trenton, to fight for change 
        and to bring common sense back to New Jersey. They’re used to getting 
        away with their lunacy unchecked. Well, they're wrong. Those days are 
        over. 
      </p>

      <p>
        Like you, we're done accepting the insiders' failure, and like you, 
        we're ready to fight. That's why we formed Elect Common Sense. Together, 
        we’re going to identify, empower and elect like-minded, Common Sense 
        candidates from top to bottom. That’s how we’ll start turning this state 
        around to reflect us, the Common Sense Majority.
      </p>

      <br />

      <p>
        Join Us,
        <br />
        <span className='bold'>Elizabeth Nader</span>
        <br />
        Chair
        <br />
        <div className={styles.logo}>
          <Logo />
        </div>
      </p>
      <br />
      <br />
      <br />
    </div>
  );
}

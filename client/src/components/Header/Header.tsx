import React from 'react';
import Stars from '../Stars/Stars';
import styles from './Header.module.css';

type Props = {
  redText: string,
  whiteText: string,
  children: any,
}

export default function Header({ redText, whiteText, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        <span className={styles.red}>{redText}</span>&nbsp;
        {whiteText}
      </h1>
      <Stars />
      {children}
    </div>
  );
}

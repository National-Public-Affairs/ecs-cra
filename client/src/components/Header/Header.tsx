import React from 'react';
import Stars from '../Stars/Stars';
import styles from './Header.module.css';

type Props = {
  redText?: string,
  whiteText: string,
  stars?: boolean;
  children: any,
}

export default function Header({
  redText,
  whiteText,
  stars,
  children,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        {redText && (
          <span className={styles.red}>{redText}&nbsp;</span>
        )}
        {whiteText}
      </h1>
      {stars && <Stars />}
      {children}
    </div>
  );
}

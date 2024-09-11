import React from 'react';
import styles from './AdvisorCard.module.css';

type Props = {
  img: string,
  name: string,
  title: string,
  subtitle: string,
}

export default function AdvisorCard({ img, name, title, subtitle }: Props) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.pic}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}

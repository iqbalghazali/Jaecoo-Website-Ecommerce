'use client';

import styles from './Hero.module.css';

const stats = [
  { value: '2.1s', label: '0–100 km/h' },
  { value: '510', label: 'Peak HP' },
  { value: '650km', label: 'Range' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <span className={styles.sub}>Flagship Series 2025</span>
      <h1 className={styles.heading}>
        Beyond the<br />Horizon.
      </h1>
      <p className={styles.desc}>
        The JAECOO J7 redefines what it means to drive. Engineered for those who
        demand performance, luxury, and innovation — in every journey.
      </p>
      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.val}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
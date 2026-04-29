'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

const stats = [
  { value: '6+', label: 'Model Variants' },
  { value: 'EV / Hybrid / AWD', label: 'Powertrain Choices' },
  { value: 'Bandung', label: 'Showroom Support' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <span className={styles.sub}>JAECOO Indonesia</span>
      <h1 className={styles.heading}>
        Beyond the Horizon,<br />Built for Every Journey.
      </h1>
      <p className={styles.desc}>
        Explore the full JAECOO lineup - from efficient EV options to premium hybrid and AWD SUVs.
        Compare models, check specs, and book your test drive in minutes.
      </p>
      <div className={styles.actions}>
        <Link href="/models" className={styles.primaryBtn}>
          Explore Models
        </Link>
        <Link href="/#contact" className={styles.secondaryBtn}>
          Book Test Drive
        </Link>
      </div>
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
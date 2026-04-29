'use client';

import styles from './FinalCtaSection.module.css';

const promos = [
  {
    value: 'DP 10%',
    label: 'Booking lebih ringan dari awal',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4Zm-1.2 14.2-3-3 1.4-1.4 1.6 1.6 4-4 1.4 1.4-5.4 5.4Z"
        />
      </svg>
    ),
  },
  {
    value: 'Fast Response 24 Jam',
    label: 'Konsultasi cepat kapan saja',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.26 10.26 0 0 0 12 1.75Zm.75 5.5v4.44l3.1 1.86-.77 1.3-4.08-2.43V7.25Z"
        />
      </svg>
    ),
  },
  {
    value: 'Diskon Terbesar Se-Jabar',
    label: 'Penawaran terbaik area Jawa Barat',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10.59 13.41a1.99 1.99 0 1 0-2.82-2.82 1.99 1.99 0 0 0 2.82 2.82ZM16.23 7.77a1.99 1.99 0 1 0 0 2.82 1.99 1.99 0 0 0 0-2.82ZM19 4h-4.59L4 14.41V19h4.59L19 8.59V4Zm-2 3.76L7.76 17H6v-1.76L15.24 6H17v1.76Z"
        />
      </svg>
    ),
  },
  {
    value: 'Cash Bertahap',
    label: 'Skema pembayaran lebih fleksibel',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11ZM12 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-6 1h1.5v6H6V9Zm10.5 0H18v6h-1.5V9Z"
        />
      </svg>
    ),
  },
  {
    value: 'Cicilan Syariah',
    label: 'Opsi pembiayaan sesuai kebutuhan Anda',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 3 6.5V10c0 5.25 3.84 10.15 9 11.5 5.16-1.35 9-6.25 9-11.5V6.5L12 2Zm0 3.34 6.5 3.25V10c0 4.16-2.93 8.18-6.5 9.33C8.43 18.18 5.5 14.16 5.5 10V8.59L12 5.34ZM11 8h2v5h-2V8Zm0 6.5h2v2h-2v-2Z"
        />
      </svg>
    ),
  },
];

export default function FinalCtaSection() {
  return (
    <section className={styles.section} id="final-cta">
      <span className={styles.tag}>Promo JAECOO Bandung</span>
      <h2 className={styles.title}>Penawaran Terbaik Untuk Anda</h2>
      <p className={styles.desc}>
        Dapatkan promo spesial untuk pembelian JAECOO dengan proses cepat, skema pembayaran fleksibel, dan pendampingan langsung dari tim kami.
      </p>

      <div className={styles.grid}>
        {promos.map((item) => (
          <article className={styles.card} key={item.label}>
            <div className={styles.iconWrap}>{item.icon}</div>
            <p className={styles.value}>{item.value}</p>
            <p className={styles.label}>{item.label}</p>
          </article>
        ))}
      </div>

      <div className={styles.actions}>
        <a href="#contact" className={styles.primaryBtn}>
          Book Test Drive
        </a>
        <a href="/compare" className={styles.secondaryBtn}>
          Compare Models
        </a>
      </div>
    </section>
  );
}

'use client';

import styles from './DealersSection.module.css';

interface DealerCardProps {
  name: string;
  addr: string;
  phone: string;
}

export default function DealerCard({ name, addr, phone }: DealerCardProps) {
  const normalizedPhone = phone.replace(/[^\d]/g, '');
  const whatsappHref = `https://wa.me/${normalizedPhone}`;

  return (
    <div className={styles.card}>
      <h4 className={styles.name}>{name}</h4>
      <div className={styles.metaRow}>
        <span className={styles.metaIcon} aria-hidden="true">
          📍
        </span>
        <div className={styles.addr}>{addr}</div>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.metaIcon} aria-hidden="true">
          ☎
        </span>
        <span className={styles.phoneText}>{phone}</span>
      </div>
      <a
        className={styles.phone}
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat WhatsApp
      </a>
    </div>
  );
}
'use client';

import styles from './ModelsSection.module.css';

interface ModelCardProps {
  id?: string;
  slug: string;
  badge: string;
  name: string;
  tagline: string;
  price: string;
  specs: { value: string; label: string }[];
}

export default function ModelCard({ id, slug, badge, name, tagline, price, specs }: ModelCardProps) {
  return (
    <div className={styles.card} id={id}>
      <span className={styles.badge}>{badge}</span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.tagline}>{tagline}</p>
      <div className={styles.price}>{price}</div>
      <div className={styles.specs}>
        {specs.map((s) => (
          <div key={s.label} className={styles.spec}>
            <div className={styles.specVal}>{s.value}</div>
            <div className={styles.specLabel}>{s.label}</div>
          </div>
        ))}
      </div>
      <a href={`/models?model=${slug}#specs`} className={styles.cta}>
        Explore {name} →
      </a>
    </div>
  );
}
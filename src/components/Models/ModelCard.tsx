'use client';

import styles from './ModelsSection.module.css';

interface ModelCardProps {
  id?: string;
  slug: string;
  badge: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  specs: { value: string; label: string }[];
  highlightedImage?: boolean;
  specLimit?: number;
}

export default function ModelCard({
  id,
  slug,
  badge,
  name,
  tagline,
  price,
  image,
  specs,
  highlightedImage = false,
  specLimit = 4,
}: ModelCardProps) {
  const shownSpecs = specs.slice(0, specLimit);

  return (
    <div className={styles.card} id={id}>
      <img
        src={image}
        alt={name}
        className={`${styles.modelImage} ${highlightedImage ? styles.modelImageHighlight : ''}`}
      />
      <span className={styles.badge}>{badge}</span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.tagline}>{tagline}</p>
      <div className={styles.price}>{price}</div>
      <div className={styles.specs}>
        {shownSpecs.map((s) => (
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
'use client';

import ModelCard from './ModelCard';
import styles from './ModelsSection.module.css';
import { MODELS } from '../../data/sections/models';

type ModelsSectionProps = {
  highlightedImage?: boolean;
  specLimit?: number;
};

export default function ModelsSection({ highlightedImage = false, specLimit = 4 }: ModelsSectionProps) {
  return (
    <section id="models">
      <span className={styles.tag}>Our Lineup</span>
      <h2 className={styles.title}>Choose Your Journey</h2>
      <p className={styles.desc}>
        Three distinct models, one singular vision — engineered to exceed every expectation.
      </p>
      <div className={styles.grid}>
        {MODELS.map((m) => (
          <ModelCard
            key={m.name}
            id={`model-${m.slug}`}
            highlightedImage={highlightedImage}
            specLimit={specLimit}
            {...m}
          />
        ))}
      </div>
    </section>
  );
}
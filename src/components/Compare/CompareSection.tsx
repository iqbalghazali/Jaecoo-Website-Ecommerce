'use client';

import styles from './CompareSection.module.css';

interface CompareRow {
  feature: string;
  J6: string;
  J7: string;
  J8: string;
}

const compareData: CompareRow[] = [
  { feature: 'Engine', J6: '1.6T TGDI', J7: '2.0T TGDI', J8: '2.0T+ TGDI' },
  { feature: 'Power', J6: '197 HP', J7: '261 HP', J8: '318 HP' },
  { feature: 'Drive System', J6: 'FWD', J7: '4WD', J8: 'AWD' },
  { feature: 'Transmission', J6: '7-Speed DCT', J7: '8-Speed DCT', J8: '8-Speed DCT+' },
  { feature: 'Screen Size', J6: '12.3"', J7: '14.6"', J8: '16.2"' },
  { feature: 'Seats', J6: '5', J7: '5', J8: '7' },
  { feature: 'Panoramic Roof', J6: '✓', J7: '✓', J8: '✓' },
  { feature: 'AR HUD', J6: '—', J7: '✓', J8: '✓' },
  { feature: 'ADAS Level 2', J6: '—', J7: '✓', J8: '✓' },
  { feature: 'Sony Audio', J6: '—', J7: '✓', J8: '✓' },
  { feature: 'Air Suspension', J6: '—', J7: '—', J8: '✓' },
  { feature: 'Massage Seats', J6: '—', J7: '—', J8: '✓' },
  { feature: 'Starting Price', J6: 'Rp 379 Jt', J7: 'Rp 489 Jt', J8: 'Rp 649 Jt' },
];

function cellClass(val: string): string {
  if (val === '✓') return styles.check;
  if (val === '—') return styles.cross;
  return '';
}

export default function CompareSection() {
  return (
    <section className={styles.compare} id="compare">
      <span className={styles.tag}>Side by Side</span>
      <h2 className={styles.title}>Compare Models</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>J6</th>
              <th className={styles.highlightCol}>J7 ★</th>
              <th>J8</th>
            </tr>
          </thead>
          <tbody>
            {compareData.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                <td className={cellClass(row.J6)}>{row.J6}</td>
                <td className={`${styles.highlightCol} ${cellClass(row.J7)}`}>{row.J7}</td>
                <td className={cellClass(row.J8)}>{row.J8}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
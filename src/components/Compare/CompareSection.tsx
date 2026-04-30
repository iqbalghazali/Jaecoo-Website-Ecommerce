import { MODELS } from '../../data/sections/models';
import styles from './CompareSection.module.css';
import { compareData } from '../../data/sections/Compare';



export default function CompareSection() {
  return (
    <section className={styles.compare} id="compare">
      <span className={styles.tag}>Side by Side</span>
      <h2 className={styles.title}>Compare Models</h2>
      <p className={styles.subtitle}>Ringkasan spesifikasi paling penting dari setiap model.</p>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.featureCol}>Fitur Utama</th>
              {MODELS.map((model) => (
                <th key={model.slug}>{model.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareData.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                {row.values.map((value, idx) => (
                  <td key={`${row.feature}-${MODELS[idx].slug}`} className={cellClass(value)}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

 function cellClass(val: string): string {
  return val === '-' ? styles.cross : '';
}
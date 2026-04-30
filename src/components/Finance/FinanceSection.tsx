import FinanceCalculator from './FinanceCalculator';
import styles from './FinanceSection.module.css';

const features = [
  { title: 'OJK-Approved Financing', desc: 'All financing partners are fully regulated' },
  { title: 'Competitive Interest Rates', desc: 'From 0% for qualified buyers' },
  { title: 'Fast Approval', desc: 'Decision within 2 business hours' },
];

export default function FinanceSection() {
  return (
    <section id="finance">
      <span className={styles.tag}>Smart Finance</span>
      <h2 className={styles.title}>Calculate Your Monthly Payment</h2>
      <p className={styles.desc}>
        Flexible financing tailored to your lifestyle. Choose your terms and see your monthly commitment instantly.
      </p>
      <div className={styles.wrap}>
        <div className={styles.features}>
          {features.map((f) => (
            <div key={f.title} className={styles.feat}>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <FinanceCalculator />
      </div>
    </section>
  );
}
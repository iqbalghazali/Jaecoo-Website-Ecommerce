'use client';

import { useState } from 'react';
import styles from './FinanceSection.module.css';

function formatRupiah(n: number): string {
  return 'Rp ' + n.toLocaleString('id-ID');
}

export default function FinanceCalculator() {
  const [price, setPrice] = useState(489_000_000);
  const [dp, setDp] = useState(20);
  const [term, setTerm] = useState(36);
  const [rate, setRate] = useState(9.5);

  const loanAmount = price * (1 - dp / 100);
  const totalInterest = loanAmount * (rate / 100) * (term / 12);
  const totalPayment = loanAmount + totalInterest;
  const monthly = totalPayment / term;

  return (
    <div className={styles.calcBox}>
      <label className={styles.label}>
        Vehicle Price
        <span className={styles.rangeVal}>{formatRupiah(price)}</span>
      </label>
      <input
        type="range"
        className={styles.range}
        min={379_000_000}
        max={649_000_000}
        step={1_000_000}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <label className={styles.label}>
        Down Payment
        <span className={styles.rangeVal}>{dp}%</span>
      </label>
      <input
        type="range"
        className={styles.range}
        min={10}
        max={50}
        value={dp}
        onChange={(e) => setDp(Number(e.target.value))}
      />

      <label className={styles.label}>
        Loan Term (months)
        <span className={styles.rangeVal}>{term} months</span>
      </label>
      <input
        type="range"
        className={styles.range}
        min={12}
        max={60}
        step={12}
        value={term}
        onChange={(e) => setTerm(Number(e.target.value))}
      />

      <label className={styles.label}>
        Interest Rate (% p.a.)
        <span className={styles.rangeVal}>{rate}%</span>
      </label>
      <input
        type="range"
        className={styles.range}
        min={0}
        max={15}
        step={0.5}
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
      />

      <div className={styles.result}>
        <div className={`${styles.resultItem} ${styles.highlight}`}>
          <div className={styles.resultLabel}>Monthly Payment</div>
          <div className={styles.resultVal}>{formatRupiah(Math.round(monthly))}</div>
        </div>
        <div className={styles.resultItem}>
          <div className={styles.resultLabel}>Loan Amount</div>
          <div className={styles.resultVal}>{formatRupiah(Math.round(loanAmount))}</div>
        </div>
        <div className={styles.resultItem}>
          <div className={styles.resultLabel}>Total Interest</div>
          <div className={styles.resultVal}>{formatRupiah(Math.round(totalInterest))}</div>
        </div>
        <div className={styles.resultItem}>
          <div className={styles.resultLabel}>Total Payment</div>
          <div className={styles.resultVal}>{formatRupiah(Math.round(totalPayment))}</div>
        </div>
      </div>
    </div>
  );
}
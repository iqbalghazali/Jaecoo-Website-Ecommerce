'use client';

import { useState } from 'react';
import styles from './BookingSection.module.css';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'J7',
    dealer: 'JAECOO Jakarta Selatan',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih ${form.name}! Booking test drive ${form.model} Anda telah diterima.`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input name="name" placeholder="Full Name *" required value={form.name} onChange={handleChange} className={styles.input} />
        <input name="email" type="email" placeholder="Email Address *" required value={form.email} onChange={handleChange} className={styles.input} />
      </div>
      <div className={styles.row}>
        <input name="phone" placeholder="Phone Number *" required value={form.phone} onChange={handleChange} className={styles.input} />
        <select name="model" value={form.model} onChange={handleChange} className={styles.select}>
          <option value="J6">JAECOO J6</option>
          <option value="J7">JAECOO J7</option>
          <option value="J8">JAECOO J8</option>
        </select>
      </div>
      <div className={styles.row}>
        <select name="dealer" value={form.dealer} onChange={handleChange} className={styles.select}>
          <option>JAECOO Jakarta Selatan</option>
          <option>JAECOO Jakarta Barat</option>
          <option>JAECOO Bandung</option>
          <option>JAECOO Surabaya</option>
          <option>JAECOO Bali</option>
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} className={styles.input} />
      </div>
      <textarea name="message" placeholder="Any special requests or questions?" rows={3} value={form.message} onChange={handleChange} className={styles.textarea} />
      <button type="submit" className={styles.btn}>Book My Test Drive →</button>
    </form>
  );
}
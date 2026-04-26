'use client';

import { useState } from 'react';
import styles from './BookingSection.module.css';
import { SHOWROOM_PHONE_WA } from '../../lib/contact';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'J5 EV Standard',
    dealer: 'JAECOO GCP Soekarno Hatta - Bandung',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Halo JAECOO Bandung, saya ingin booking test drive.',
      '',
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      `No. HP: ${form.phone}`,
      `Model: ${form.model}`,
      `Showroom: ${form.dealer}`,
      `Tanggal: ${form.date || '-'}`,
      `Pesan: ${form.message || '-'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${SHOWROOM_PHONE_WA}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
          <option value="J5 EV Standard">J5 EV Standard</option>
          <option value="J5 EV Premium">J5 EV Premium</option>
          <option value="J7 AWD">J7 AWD</option>
          <option value="J7 SHS">J7 SHS</option>
          <option value="J8 SHS">J8 SHS</option>
          <option value="J8 ARDIS">J8 ARDIS</option>
        </select>
      </div>
      <div className={styles.row}>
        <select name="dealer" value={form.dealer} onChange={handleChange} className={styles.select}>
          <option>JAECOO GCP Soekarno Hatta - Bandung</option>
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} className={styles.input} />
      </div>
      <textarea name="message" placeholder="Any special requests or questions?" rows={3} value={form.message} onChange={handleChange} className={styles.textarea} />
      <button type="submit" className={styles.btn}>Book My Test Drive →</button>
    </form>
  );
}
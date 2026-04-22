'use client';

import BookingForm from './BookingForm';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  return (
    <section className={styles.booking} id="contact">
      <span className={styles.tag}>Experience</span>
      <h2 className={styles.title}>Book a Test Drive</h2>
      <p className={styles.desc}>
        Feel the difference. Schedule your exclusive JAECOO test drive experience at a showroom near you.
      </p>
      <BookingForm />
    </section>
  );
}
import BookingForm from './BookingForm';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  return (
    <section className={styles.booking} id="contact">
      <span className={styles.tag}>Experience</span>
      <h2 className={styles.title}>Book a Test Drive</h2>
      <p className={styles.desc}>
        Jadwalkan test drive Anda dan kirim langsung ke WhatsApp showroom kami untuk respon cepat.
      </p>
      <BookingForm />
    </section>
  );
}
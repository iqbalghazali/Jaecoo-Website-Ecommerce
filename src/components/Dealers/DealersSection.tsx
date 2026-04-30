import DealerCard from './DealerCard';
import styles from './DealersSection.module.css';
import { SHOWROOM_PHONE_DISPLAY } from '../../lib/contact';

const dealers = [
  // { name: 'JAECOO JMS City Store Pontianak', addr: 'Tenant Jaecoo No unit A1-32, Lt.dasar. Ayani megamal, Kota Pontianak, Kalimantan Barat'}
  // { name: 'Jaecoo Cihampelas Bandung', addr: 'Jl. Cihampelas No 264-268 Cipaganti, Kec. Coblong Kota Bandung 40562'},
  { name: 'JAECOO GCP Soekarno Hatta', addr: 'Jl. Soekarno-Hatta no.590, sekejati, Kec. Buah Batu Kota Bandung Jawa Barat 40286', phone: SHOWROOM_PHONE_DISPLAY }
  // { name: 'JAECOO Surabaya', addr: 'Jl. Ahmad Yani No. 88, Surabaya, 60234'},
  // { name: 'JAECOO Bali', addr: 'Jl. Sunset Road No. 55, Kuta, Bali, 80361' },
];

export default function DealersSection() {
  return (
    <section className={styles.dealers} id="dealers">
      <span className={styles.tag}>Find Us</span>
      <h2 className={styles.title}>Showroom Locator</h2>
      <div className={styles.operationalCard}>
        <div className={styles.operationalIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.26 10.26 0 0 0 12 1.75Zm.75 5.5v4.44l3.1 1.86-.77 1.3-4.08-2.43V7.25Z"
            />
          </svg>
        </div>
        <div>
          <p className={styles.operationalTitle}>Jam Operasional</p>
          <p className={styles.operationalText}>Senin - Sabtu: 08.00 - 17.00</p>
          <p className={styles.operationalText}>Minggu: 10.00 - 15.00</p>
        </div>
      </div>
      <div className={styles.grid}>
        {dealers.map((d) => (
          <DealerCard key={d.name} {...d} />
        ))}
      </div>
    </section>
  );
}
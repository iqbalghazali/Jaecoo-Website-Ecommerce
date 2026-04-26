'use client';

import DealerCard from './DealerCard';
import styles from './DealersSection.module.css';
import { SHOWROOM_PHONE_DISPLAY } from '../../lib/contact';

const dealers = [
  // { name: 'JAECOO JMS City Store Pontianak', addr: 'Tenant Jaecoo No unit A1-32, Lt.dasar. Ayani megamal, Kota Pontianak, Kalimantan Barat'}
  // { name: 'Jaecoo Cihampelas Bandung', addr: 'Jl. Cihampelas No 264-268 Cipaganti, Kec. Coblong Kota Bandung 40562'},
  { name: 'JAECOO GCP Soekarno Hatta', addr: 'Jl. Sukarno-Hatta no.590, sekejati, Kec. Buah Batu Kota Bandung Jawa Barat 40286', phone: SHOWROOM_PHONE_DISPLAY }
  // { name: 'JAECOO Surabaya', addr: 'Jl. Ahmad Yani No. 88, Surabaya, 60234'},
  // { name: 'JAECOO Bali', addr: 'Jl. Sunset Road No. 55, Kuta, Bali, 80361' },
];

export default function DealersSection() {
  return (
    <section className={styles.dealers} id="dealers">
      <span className={styles.tag}>Find Us</span>
      <h2 className={styles.title}>Showroom Locator</h2>
      <div className={styles.grid}>
        {dealers.map((d) => (
          <DealerCard key={d.name} {...d} />
        ))}
      </div>
    </section>
  );
}
'use client';

import { useEffect, useState } from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Diana Putri',
    model: 'J5 EV - Bandung',
    quote:
      'Pelayanan profesional! Salesnya ramah, proses kredit cepat dan sangat membantu dari awal sampai serah terima.',
    image: '/Photos/testimoni_1.jpeg',
  },
  {
    name: 'Budi Santoso',
    model: 'J5 EV - Bandung',
    quote:
      'luar biasa! kabin luas, tenaga berasa, dan pengalaman driving sangat premium.',
    image: '/Photos/testimoni_2.jpeg',
  },
  {
    name: 'Rizky Firmansyah',
    model: 'J5 EV - Bandung',
    quote:
      'Setelah test drive J5 EV langsung jatuh hati. Irit, responsif, fiturnya lengkap, cocok buat harian.',
    image: '/Photos/testimoni_3.jpeg',
  },
  {
    name: 'Andi Prasetyo',
    model: 'J5 EV - Bandung',
    quote:
      'Suspensi nyaman dan handling stabil. Tim sales juga komunikatif saat saya butuh info detail spesifikasi.',
    image: '/Photos/testimoni_4.jpeg',
  },
  {
    name: 'Sari Wulandari',
    model: 'J5 EV - Bandung',
    quote:
      'Interiornya modern dan nyaman. Proses booking sampai pengiriman sangat cepat dan transparan.',
    image: '/Photos/testimoni_5.jpeg',
  },
  {
    name: 'Hendra Gunawan',
    model: 'J5 EV - Bandung',
    quote:
      'Performa mesin dan teknologi hybrid-nya terasa banget, cocok untuk perjalanan keluarga dan bisnis.',
    image: '/Photos/testimoni_6.jpeg',
  },
  {
    name: 'Nadia Aulia',
    model: 'J5 EV - Bandung',
    quote:
      'After sales responsif dan edukatif. Saya dibantu sampai paham fitur-fitur safety yang ada.',
    image: '/Photos/testimoni_7.jpeg',
  },
  {
    name: 'Fajar Ramadhan',
    model: 'J5 EV - Bandung',
    quote:
      'Mobil nyaman untuk jarak jauh, kabin senyap, dan fitur kameranya sangat membantu saat parkir.',
    image: '/Photos/testimoni_8.jpeg',
  },
];

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[number] | null
  >(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedTestimonial(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section id="testimonials">
      <span className={styles.tag}>Testimonials</span>
      <h2 className={styles.title}>Kata Pelanggan Kami</h2>
      <p className={styles.desc}>
        Cerita langsung dari pelanggan yang sudah merasakan pengalaman memiliki JAECOO.
      </p>

      <div className={styles.grid}>
        {testimonials.map((item) => (
          <button
            key={`${item.name}-${item.model}`}
            type="button"
            className={styles.card}
            onClick={() => setSelectedTestimonial(item)}
            aria-label={`Lihat detail testimonial dari ${item.name}`}
          >
            <img src={item.image} alt={item.name} className={styles.photo} />
            <p className={styles.quote}>"{item.quote}"</p>
            <h4 className={styles.name}>{item.name}</h4>
            <p className={styles.model}>{item.model}</p>
          </button>
        ))}
      </div>

      {selectedTestimonial && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedTestimonial(null)}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={`Detail testimonial ${selectedTestimonial.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedTestimonial(null)}
              aria-label="Tutup modal testimonial"
            >
              ×
            </button>
            <img
              src={selectedTestimonial.image}
              alt={selectedTestimonial.name}
              className={styles.modalPhoto}
            />
            <p className={styles.modalQuote}>"{selectedTestimonial.quote}"</p>
            <h4 className={styles.modalName}>{selectedTestimonial.name}</h4>
            <p className={styles.modalModel}>{selectedTestimonial.model}</p>
          </div>
        </div>
      )}
    </section>
  );
}

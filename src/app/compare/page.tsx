import CompareSection from '../../components/Compare/CompareSection';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perbandingan Model JAECOO',
  description:
    'Bandingkan model JAECOO secara side-by-side mulai dari fitur, performa, hingga nilai yang paling sesuai untuk Anda di Bandung.',
  alternates: {
    canonical: '/compare',
  },
  openGraph: {
    title: 'Perbandingan Model JAECOO',
    description:
      'Gunakan halaman perbandingan untuk memilih model JAECOO terbaik berdasarkan kebutuhan dan budget.',
    url: 'https://jaecoomurahbdg.com/compare',
  },
};

export default function ComparePage() {
  return (
    <>
      <Nav />
      <section style={{ paddingTop: 180, minHeight: '70vh' }}>
        <CompareSection />
      </section>
      <Footer />
    </>
  );
}

import CompareSection from '../../components/Compare/CompareSection';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';

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

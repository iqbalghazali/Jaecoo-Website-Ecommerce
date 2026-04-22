import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import FinanceSection from '../components/Finance/FinanceSection';
import CompareSection from '../components/Compare/CompareSection';
import DealersSection from '../components/Dealers/DealersSection';
import BookingSection from '../components/Booking/BookingSection';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <FinanceSection />
      <CompareSection />
      <DealersSection />
      <BookingSection />
      <Footer />
    </>
  );
}
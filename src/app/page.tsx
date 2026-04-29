import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import ModelsSection from '../components/Models/ModelsSection';
// import FinanceSection from '../components/Finance/FinanceSection';
import DealersSection from '../components/Dealers/DealersSection';
import BookingSection from '../components/Booking/BookingSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import FinalCtaSection from '../components/FinalCta/FinalCtaSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <ModelsSection highlightedImage specLimit={2} />
      {/* <FinanceSection /> */}
      <DealersSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <BookingSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
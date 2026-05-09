import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import ModelsSection from "../components/Models/ModelsSection";
import type { Metadata } from "next";
// import FinanceSection from '../components/Finance/FinanceSection';
import DealersSection from "../components/Dealers/DealersSection";
import BookingSection from "../components/Booking/BookingSection";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import FinalCtaSection from "../components/FinalCta/FinalCtaSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp/FloatingWhatsApp";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Dealer Resmi JAECOO Bandung",
  description:
    "Jaecoo Bandung official showroom. Cek harga OTR Bandung, bandingkan model J5 EV, J7 SHS, J8 SHS, dan booking test drive.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dealer Resmi JAECOO Bandung",
    description:
      "Cek model JAECOO terbaru di Bandung, lihat spesifikasi dan harga OTR, lalu booking test drive langsung via WhatsApp.",
    url: "https://www.jaecoomurahbdg.com/",
  },
};

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

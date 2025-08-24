import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import BenefitsSection from "@/components/benefits-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

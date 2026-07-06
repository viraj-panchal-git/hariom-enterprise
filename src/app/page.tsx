import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ToleranceStandardsSection from "@/components/sections/ToleranceStandardsSection";

const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const IndiaMARTSection = dynamic(() => import("@/components/sections/IndiaMARTSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection compact />
      <ProductsSection compact />
      <ToleranceStandardsSection />
      <IndustriesSection />
      <TestimonialsSection limit={3} />
      <IndiaMARTSection />
      <ContactSection />
    </>
  );
}

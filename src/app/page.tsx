import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import { getFAQSchema } from "@/lib/seo";
import { faqs } from "@/data/faqs";

const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const CapabilitiesSection = dynamic(() => import("@/components/sections/CapabilitiesSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const IndiaMARTSection = dynamic(() => import("@/components/sections/IndiaMARTSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function HomePage() {
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <FAQSection />
      <IndiaMARTSection />
      <ContactSection />
    </>
  );
}

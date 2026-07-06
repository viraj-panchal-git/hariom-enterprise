import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import PageHero from "@/components/ui/PageHero";
import { getBreadcrumbSchema } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Hariom Enterprise - CNC, Grinding & Machining",
  description:
    "Precision manufacturing services including centerless grinding, surface grinding, CNC machining, VMC machining, Traub components, and industrial job work in Ahmedabad.",
};

export default function ServicesPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.url },
    { name: "Services", url: `${COMPANY.url}/services` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero
        title="Our Services"
        description="Comprehensive precision manufacturing and grinding services"
      />
      <ServicesSection showAll />
      <ContactSection />
    </>
  );
}

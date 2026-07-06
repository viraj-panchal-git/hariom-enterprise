import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PageHero from "@/components/ui/PageHero";
import { getBreadcrumbSchema } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Hariom Enterprise - Precision Engineering Ahmedabad",
  description:
    "Learn about Hariom Enterprise, a premier precision engineering manufacturer in Ahmedabad specializing in CNC machining, grinding services, and custom industrial components.",
};

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.url },
    { name: "About", url: `${COMPANY.url}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero
        title="About Us"
        description="Precision engineering excellence from Ahmedabad, Gujarat"
      />
      <AboutSection fullPage />
      <WhyChooseUsSection />
      <ProcessSection />
    </>
  );
}

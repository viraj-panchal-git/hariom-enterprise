import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import PageHero from "@/components/ui/PageHero";
import { getBreadcrumbSchema } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Hariom Enterprise - Precision Engineering Ahmedabad",
  description:
    "About Hariom Enterprise — CNC, VMC and grinding job work in Ahmedabad. Owner Jayesh Panchal. Contact details and manufacturing capabilities.",
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
        description="Our work, owner, and how to connect with Hariom Enterprise"
      />
      <AboutSection fullPage />
    </>
  );
}

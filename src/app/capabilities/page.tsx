import type { Metadata } from "next";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import PageHero from "@/components/ui/PageHero";
import { getBreadcrumbSchema } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Hariom Enterprise",
  description:
    "Explore Hariom Enterprise precision machining, grinding, CNC, VMC capabilities, tolerance standards, and production capacity in Ahmedabad.",
};

export default function CapabilitiesPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.url },
    { name: "Capabilities", url: `${COMPANY.url}/capabilities` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero
        title="Manufacturing Capabilities"
        description="Precision engineering capacity, tolerance standards, and machine capabilities"
      />
      <CapabilitiesSection showAll />
    </>
  );
}

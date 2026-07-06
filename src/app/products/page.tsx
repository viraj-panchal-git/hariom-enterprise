import type { Metadata } from "next";
import ProductsSection from "@/components/sections/ProductsSection";
import ContactSection from "@/components/sections/ContactSection";
import PageHero from "@/components/ui/PageHero";
import { getBreadcrumbSchema } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products | Hariom Enterprise - Precision Components Manufacturer",
  description:
    "Precision engineered products including dowel pins, taper pins, Traub parts, CNC components, VMC components, machine shafts, and custom engineering parts.",
};

export default function ProductsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.url },
    { name: "Products", url: `${COMPANY.url}/products` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero
        title="Our Products"
        description="High precision industrial machine components manufactured to specification"
      />
      <ProductsSection showAll />
      <ContactSection />
    </>
  );
}

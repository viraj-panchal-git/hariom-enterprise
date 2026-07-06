import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import IndiaMARTSection from "@/components/sections/IndiaMARTSection";
import PageHero from "@/components/ui/PageHero";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact Us | Hariom Enterprise - Get a Quote",
  description:
    "Contact Hariom Enterprise for precision machining and grinding services. Call +91 94281 16410, email, or submit an inquiry form. Ahmedabad, Gujarat.",
};

export default function ContactPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.url },
    { name: "Contact", url: `${COMPANY.url}/contact` },
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        title="Contact Us"
        description="Get in touch for quotations, inquiries, and manufacturing partnerships"
      />
      <ContactSection />
      <FAQSection />
      <IndiaMARTSection />
    </>
  );
}

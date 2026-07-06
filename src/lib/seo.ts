import { COMPANY } from "./constants";

export const siteMetadata = {
  title: "Hariom Enterprise | Precision Engineering & CNC Manufacturing Ahmedabad",
  description:
    "Hariom Enterprise - Leading precision engineering manufacturer in Ahmedabad. CNC machining, VMC components, centerless grinding, surface grinding, Traub parts & custom industrial components. GST: 24AYZPP7250J1ZN.",
  keywords: [
    "precision engineering Ahmedabad",
    "CNC machining Gujarat",
    "VMC components manufacturer",
    "centerless grinding Ahmedabad",
    "surface grinding services",
    "cylindrical grinding",
    "Traub machine parts",
    "dowel pins manufacturer",
    "taper pins supplier",
    "industrial job work",
    "machine components Gujarat",
    "Hariom Enterprise",
    "precision manufacturing India",
    "grinding services Ahmedabad",
    "custom engineering components",
  ],
  openGraph: {
    title: "Hariom Enterprise | Precision Engineering & Industrial Manufacturing",
    description:
      "Manufacturing high precision CNC, VMC, Grinding and Traub components for industrial applications in Ahmedabad, Gujarat.",
    url: COMPANY.url,
    siteName: COMPANY.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hariom Enterprise" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Hariom Enterprise | Precision Engineering Manufacturer",
    description:
      "High precision CNC, VMC, Grinding and Traub components for industrial applications.",
    images: ["/og-image.png"],
  },
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
  "@id": `${COMPANY.url}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    image: `${COMPANY.url}/logo/logo-horizontal.svg`,
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.coordinates.lat,
      longitude: COMPANY.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    founder: { "@type": "Person", name: COMPANY.owner },
    taxID: COMPANY.gst.gstin,
    sameAs: [COMPANY.indiamart],
    description: siteMetadata.description,
    areaServed: "India",
    knowsAbout: [
      "CNC Machining",
      "VMC Machining",
      "Centerless Grinding",
      "Surface Grinding",
      "Precision Engineering",
    ],
  };
}

export function getManufacturingBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    name: COMPANY.name,
    url: COMPANY.url,
    description:
      "Precision engineering manufacturer specializing in CNC machining, VMC components, grinding services, and custom industrial machine parts.",
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      addressCountry: "IN",
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Dowel Pins" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Taper Pins" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CNC Machining" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Centerless Grinding" } },
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

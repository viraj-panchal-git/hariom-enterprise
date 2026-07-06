export const COMPANY = {
  name: "Hariom Enterprise",
  legalName: "HARIOM ENTERPRISE",
  owner: "Jayesh Panchal",
  phone: "+91 94281 16410",
  phoneRaw: "+919428116410",
  whatsapp: "+919428116410",
  email: "Hariomenterprise1755@gmail.com",
  businessType: "Proprietorship",
  nature: "Precision Engineering Manufacturer",
  address: {
    line1: "4, Panchal Industrial Colony",
    line2: "Inside Chanduji Madhaji Estate",
    line3: "Tavdipura Rd",
    city: "Ahmedabad",
    pincode: "380004",
    state: "Gujarat",
    stateCode: "GJ",
    country: "India",
    full: "4, Panchal Industrial Colony, Tavdipura Rd, inside Chanduji Madhaji Estate, Ahmedabad, 380004, GJ",
    directions:
      "4, Panchal Industrial Colony, Tavdipura Rd, inside Chanduji Madhaji Estate, Ahmedabad, 380004, GJ",
  },
  coordinates: { lat: 23.04784, lng: 72.586121 },
  maps: {
    shareUrl: "https://share.google/W2oB2H2jAe6NabYlA",
    coordinates: { lat: 23.04784, lng: 72.586121 },
  },
  indiamart: "https://www.indiamart.com/hariom-entp-ahmedabad/",
  gst: {
    gstin: "24AYZPP7250J1ZN",
    pan: "AYZPP7250J",
    registrationType: "Regular",
    registrationDate: "14 February 2024",
  },
  hours: {
    days: "Monday to Saturday",
    time: "9:00 AM to 7:00 PM",
  },
  url: "https://hariom-enterprise.com",
} as const;

export const COLORS = {
  primary: "#0B3C5D",
  secondary: "#1E88E5",
  accent: "#FF8C00",
  dark: "#1C1C1C",
  light: "#F8FAFC",
  steelGray: "#6B7280",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;

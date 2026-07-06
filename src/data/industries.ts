import {
  Car,
  Pill,
  Shirt,
  Cog,
  Package,
  Droplets,
  Bot,
  UtensilsCrossed,
  FlaskConical,
  Construction,
  Wrench,
  Factory,
  Hammer,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const industries: { name: string; icon: LucideIcon }[] = [
  { name: "Automobile", icon: Car },
  { name: "Pharmaceutical", icon: Pill },
  { name: "Textile", icon: Shirt },
  { name: "Engineering", icon: Cog },
  { name: "Packaging", icon: Package },
  { name: "Plastic", icon: Droplets },
  { name: "Automation", icon: Bot },
  { name: "Food Processing", icon: UtensilsCrossed },
  { name: "Chemical", icon: FlaskConical },
  { name: "Heavy Machinery", icon: Construction },
  { name: "Industrial Equipment", icon: Wrench },
  { name: "Machine Manufacturers", icon: Factory },
  { name: "Tool Rooms", icon: Hammer },
  { name: "OEM Manufacturers", icon: Building2 },
];

export const whyChooseUs = [
  {
    title: "Precision Manufacturing",
    description: "Micron-level accuracy across all machining and grinding operations.",
  },
  {
    title: "High Accuracy",
    description: "Advanced measuring instruments ensure every component meets specifications.",
  },
  {
    title: "Modern Machinery",
    description: "State-of-the-art CNC, VMC, and grinding machines for consistent output.",
  },
  {
    title: "Experienced Team",
    description: "Skilled engineers and operators with decades of combined expertise.",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous inspection at every stage from raw material to final dispatch.",
  },
  {
    title: "Competitive Pricing",
    description: "Efficient processes deliver premium quality at competitive market rates.",
  },
  {
    title: "Fast Delivery",
    description: "Optimized production planning ensures on-time delivery for every order.",
  },
  {
    title: "Customer Satisfaction",
    description: "Long-term partnerships built on trust, quality, and reliable service.",
  },
  {
    title: "Reliable Support",
    description: "Responsive communication and dedicated support for all inquiries.",
  },
  {
    title: "Industrial Expertise",
    description: "Deep knowledge of industrial manufacturing across diverse sectors.",
  },
];

export const manufacturingSteps = [
  { step: 1, title: "Raw Material", description: "Sourced from certified suppliers with material test certificates." },
  { step: 2, title: "Cutting", description: "Precision cutting to size using bandsaw and cutoff machines." },
  { step: 3, title: "Turning", description: "CNC and conventional turning to achieve near-net shapes." },
  { step: 4, title: "CNC Machining", description: "High-precision CNC milling and turning for complex profiles." },
  { step: 5, title: "Grinding", description: "Centerless, surface, and cylindrical grinding for final dimensions." },
  { step: 6, title: "Inspection", description: "Dimensional inspection using micrometers, calipers, and gauges." },
  { step: 7, title: "Quality Check", description: "Final quality audit against customer drawings and specifications." },
  { step: 8, title: "Packing", description: "Protective packaging to prevent damage during transit." },
  { step: 9, title: "Dispatch", description: "Timely dispatch with documentation and delivery tracking." },
];

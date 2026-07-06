import {
  Target,
  Cpu,
  ShieldCheck,
  Users,
  Clock,
  BadgeIndianRupee,
  type LucideIcon,
} from "lucide-react";

const iconGradient = "from-primary to-secondary";

export const whyChooseUs: {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}[] = [
  {
    title: "Precision Manufacturing",
    description: "Micron-level accuracy across all machining and grinding operations.",
    icon: Target,
    gradient: iconGradient,
  },
  {
    title: "Advanced Machinery",
    description: "CNC, VMC, grinders, and Traub machines for diverse job work requirements.",
    icon: Cpu,
    gradient: iconGradient,
  },
  {
    title: "Quality Inspection",
    description: "In-process and final checks with precision measuring instruments.",
    icon: ShieldCheck,
    gradient: iconGradient,
  },
  {
    title: "Skilled Workforce",
    description: "Experienced team delivering components to drawing specifications.",
    icon: Users,
    gradient: iconGradient,
  },
  {
    title: "Timely Delivery",
    description: "Optimized production schedules to meet your deadlines.",
    icon: Clock,
    gradient: iconGradient,
  },
  {
    title: "Competitive Pricing",
    description: "Quality precision components at fair job-work rates.",
    icon: BadgeIndianRupee,
    gradient: iconGradient,
  },
];

import {
  Cog,
  Disc,
  Layers,
  Cpu,
  Box,
  Wrench,
  Pin,
  Triangle,
  Settings,
  Factory,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const services: Service[] = [
  {
    id: "centerless-grinding",
    title: "Centerless Grinding",
    description:
      "Precision centerless grinding with high dimensional accuracy and superior surface finish for cylindrical components.",
    icon: Disc,
    gradient: "from-primary to-secondary",
  },
  {
    id: "surface-grinding",
    title: "Surface Grinding",
    description:
      "Precision surface grinding for flat industrial components with micron-level accuracy and excellent parallelism.",
    icon: Layers,
    gradient: "from-secondary to-accent",
  },
  {
    id: "cylindrical-grinding",
    title: "Cylindrical Grinding",
    description:
      "External and internal cylindrical grinding for shafts, rollers, and precision machine parts to tight tolerances.",
    icon: Cog,
    gradient: "from-primary via-secondary to-accent",
  },
  {
    id: "cnc-machining",
    title: "CNC Machining",
    description:
      "High precision CNC machining for custom engineering components with complex geometries and tight tolerances.",
    icon: Cpu,
    gradient: "from-[#0a3250] to-secondary",
  },
  {
    id: "vmc-machining",
    title: "VMC Machining",
    description:
      "Manufacturing precision parts using Vertical Machining Centers for complex 3D profiles and production runs.",
    icon: Box,
    gradient: "from-secondary to-primary",
  },
  {
    id: "traub-components",
    title: "Traub Machine Components",
    description:
      "Manufacturing Traub machine parts with high tolerance, consistent quality, and reliable dimensional stability.",
    icon: Settings,
    gradient: "from-primary to-accent",
  },
  {
    id: "dowel-pins",
    title: "Dowel Pins",
    description:
      "Manufacturing hardened precision dowel pins in various sizes with accurate diameter and length tolerances.",
    icon: Pin,
    gradient: "from-accent/90 to-primary",
  },
  {
    id: "taper-pins",
    title: "Taper Pins",
    description:
      "Manufacturing custom taper pins according to customer drawings with precise taper angles and surface finish.",
    icon: Triangle,
    gradient: "from-[#0d4a6f] to-secondary",
  },
  {
    id: "precision-components",
    title: "Precision Machine Components",
    description:
      "Manufacturing custom machine components as per customer requirements with full traceability and inspection.",
    icon: Wrench,
    gradient: "from-primary to-[#1565c0]",
  },
  {
    id: "industrial-job-work",
    title: "Industrial Job Work",
    description:
      "Complete machining and grinding job work services for manufacturers, OEMs, and engineering firms across India.",
    icon: Factory,
    gradient: "from-secondary via-primary to-accent",
  },
];

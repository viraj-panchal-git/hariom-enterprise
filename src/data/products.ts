import {
  Pin,
  Triangle,
  Settings,
  Cpu,
  Box,
  Cylinder,
  CircleDot,
  Disc,
  SeparatorHorizontal,
  RotateCw,
  Circle,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  applications: string[];
  material: string;
  process: string;
  icon: LucideIcon;
  gradient: string;
}

export const products: Product[] = [
  {
    id: "dowel-pins",
    name: "Dowel Pins",
    description:
      "Hardened precision dowel pins manufactured to exact diameter and length specifications for alignment and locating applications.",
    applications: ["Fixture alignment", "Jig assembly", "Tooling", "Die sets", "Precision assemblies"],
    material: "EN8, EN24, Mild Steel, Hardened Steel, Stainless Steel",
    process: "Turning, Grinding, Heat Treatment, Quality Inspection",
    icon: Pin,
    gradient: "from-primary to-secondary",
  },
  {
    id: "taper-pins",
    name: "Taper Pins",
    description:
      "Custom taper pins manufactured per drawing with accurate taper ratios for secure mechanical fastening and alignment.",
    applications: ["Shaft coupling", "Gear mounting", "Machine assembly", "Industrial equipment"],
    material: "EN8, EN19, Alloy Steel, Carbon Steel",
    process: "CNC Turning, Taper Grinding, Surface Finish, Inspection",
    icon: Triangle,
    gradient: "from-secondary to-accent",
  },
  {
    id: "traub-parts",
    name: "Traub Parts",
    description:
      "High-precision components for Traub automatic lathes including collets, guide bushes, and custom tooling parts.",
    applications: ["Automatic lathe operations", "Mass production", "Precision turning", "OEM spares"],
    material: "Tool Steel, EN8, EN24, Hardened Alloy Steel",
    process: "CNC Machining, Grinding, Heat Treatment",
    icon: Settings,
    gradient: "from-primary via-secondary to-accent",
  },
  {
    id: "cnc-components",
    name: "CNC Components",
    description:
      "Complex precision components produced on CNC lathes and mills with tight tolerances and superior surface finish.",
    applications: ["Automation", "Machine building", "Industrial equipment", "OEM manufacturing"],
    material: "MS, SS, Brass, Aluminum, Alloy Steel",
    process: "CNC Turning, CNC Milling, Deburring, Inspection",
    icon: Cpu,
    gradient: "from-[#0a3250] to-secondary",
  },
  {
    id: "vmc-components",
    name: "VMC Components",
    description:
      "Precision parts machined on Vertical Machining Centers for 3D profiles, pockets, and complex geometries.",
    applications: ["Molds & dies", "Machine frames", "Automation parts", "Industrial fixtures"],
    material: "MS, SS, Aluminum, Cast Iron, Tool Steel",
    process: "VMC Machining, Surface Grinding, CMM Inspection",
    icon: Box,
    gradient: "from-secondary to-primary",
  },
  {
    id: "machine-shafts",
    name: "Machine Shafts",
    description:
      "Precision ground shafts with accurate diameters, runout, and surface finish for rotating machinery applications.",
    applications: ["Motors", "Pumps", "Conveyors", "Gearboxes", "Industrial drives"],
    material: "EN8, EN19, EN24, Stainless Steel, Carbon Steel",
    process: "Turning, Cylindrical Grinding, Keyway Cutting, Inspection",
    icon: Cylinder,
    gradient: "from-primary to-accent",
  },
  {
    id: "precision-bushes",
    name: "Precision Bushes",
    description:
      "Custom bushes with accurate bore dimensions and concentricity for bearing and pivot applications.",
    applications: ["Bearings", "Pivot joints", "Hydraulic systems", "Machine tools"],
    material: "Phosphor Bronze, Gun Metal, EN8, SS, Brass",
    process: "Turning, Boring, Grinding, Honing",
    icon: CircleDot,
    gradient: "from-[#0d4a6f] to-secondary",
  },
  {
    id: "grinding-components",
    name: "Grinding Components",
    description:
      "Components finished through centerless, surface, or cylindrical grinding to achieve micron-level accuracy.",
    applications: ["Precision assemblies", "Measuring instruments", "Machine tools", "Automotive"],
    material: "Hardened Steel, Tool Steel, Alloy Steel",
    process: "Centerless Grinding, Surface Grinding, Cylindrical Grinding",
    icon: Disc,
    gradient: "from-accent/90 to-primary",
  },
  {
    id: "machine-spacers",
    name: "Machine Spacers",
    description:
      "Precision spacers and shims with accurate thickness for assembly spacing and alignment in machinery.",
    applications: ["Assembly spacing", "Bearing preload", "Tool setup", "Machine adjustment"],
    material: "MS, SS, Hardened Steel, Brass",
    process: "Turning, Surface Grinding, Thickness Inspection",
    icon: SeparatorHorizontal,
    gradient: "from-primary to-[#1565c0]",
  },
  {
    id: "industrial-rollers",
    name: "Industrial Rollers",
    description:
      "Precision ground rollers for conveyor, printing, and processing machinery with excellent roundness.",
    applications: ["Conveyors", "Textile machinery", "Printing presses", "Material handling"],
    material: "EN8, EN24, Rubber-coated Steel, SS",
    process: "Turning, Cylindrical Grinding, Surface Finish",
    icon: RotateCw,
    gradient: "from-secondary via-primary to-accent",
  },
  {
    id: "precision-sleeves",
    name: "Precision Sleeves",
    description:
      "Custom sleeves with tight bore and OD tolerances for shaft protection and bearing housing applications.",
    applications: ["Shaft protection", "Bearing housings", "Hydraulic cylinders", "Pumps"],
    material: "EN8, SS, Bronze, Cast Iron",
    process: "Turning, Boring, Grinding, Honing",
    icon: Circle,
    gradient: "from-primary to-secondary",
  },
  {
    id: "custom-engineering-parts",
    name: "Custom Engineering Parts",
    description:
      "Bespoke precision components manufactured from customer drawings with full dimensional reporting.",
    applications: ["OEM manufacturing", "Prototype development", "Replacement parts", "Special machinery"],
    material: "As per drawing specification",
    process: "CNC Machining, Grinding, Heat Treatment, CMM Inspection",
    icon: Wrench,
    gradient: "from-accent to-primary",
  },
];

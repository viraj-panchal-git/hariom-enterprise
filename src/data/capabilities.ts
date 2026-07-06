import {
  Disc,
  Cpu,
  Box,
  Gauge,
  Ruler,
  ShieldCheck,
  Factory,
  Cog,
  Layers,
  Microscope,
  Settings,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  metric: string;
  metricLabel: string;
  gradient: string;
}

export interface ToleranceSpec {
  label: string;
  value: string;
  unit: string;
}

export const companyStats = [
  { value: "10+", label: "Precision Services", icon: Wrench },
  { value: "12+", label: "Product Lines", icon: Cog },
  { value: "14+", label: "Industries Served", icon: Factory },
  { value: "9", label: "Process Stages", icon: Settings },
] as const;

export const toleranceSpecs: ToleranceSpec[] = [
  { label: "Diameter Tolerance", value: "±0.01", unit: "mm" },
  { label: "Parallelism", value: "0.005", unit: "mm" },
  { label: "Surface Finish", value: "Ra 0.4", unit: "µm" },
  { label: "Roundness", value: "0.003", unit: "mm" },
  { label: "Flatness", value: "0.005", unit: "mm" },
  { label: "Concentricity", value: "0.01", unit: "mm" },
];

export const capabilities: Capability[] = [
  {
    id: "centerless-grinding",
    title: "Centerless Grinding",
    description: "High-volume cylindrical grinding with consistent diameter control and superior roundness.",
    icon: Disc,
    metric: "Ø 2–80",
    metricLabel: "mm Range",
    gradient: "from-primary to-secondary",
  },
  {
    id: "surface-grinding",
    title: "Surface Grinding",
    description: "Flat component grinding with controlled thickness, parallelism, and surface finish.",
    icon: Layers,
    metric: "0.005",
    metricLabel: "mm Parallelism",
    gradient: "from-secondary to-accent",
  },
  {
    id: "cylindrical-grinding",
    title: "Cylindrical Grinding",
    description: "External and internal grinding for shafts, rollers, and precision machine parts.",
    icon: Cog,
    metric: "Ra 0.4",
    metricLabel: "Surface Finish",
    gradient: "from-primary via-secondary to-accent",
  },
  {
    id: "cnc-machining",
    title: "CNC Machining",
    description: "Complex geometries, tight tolerances, and repeatable production on CNC lathes and mills.",
    icon: Cpu,
    metric: "±0.01",
    metricLabel: "mm Accuracy",
    gradient: "from-[#0a3250] to-secondary",
  },
  {
    id: "vmc-machining",
    title: "VMC Machining",
    description: "3D profiles, pockets, and multi-axis features on vertical machining centers.",
    icon: Box,
    metric: "3-Axis",
    metricLabel: "VMC Capability",
    gradient: "from-secondary to-primary",
  },
  {
    id: "traub-components",
    title: "Traub Components",
    description: "Collets, guide bushes, and turned spares with tight concentricity for automatic lathes.",
    icon: Settings,
    metric: "H7/g6",
    metricLabel: "Fit Grades",
    gradient: "from-primary to-accent",
  },
  {
    id: "inspection",
    title: "Precision Inspection",
    description: "In-process and final dimensional checking with micrometers, gauges, and calipers.",
    icon: Microscope,
    metric: "100%",
    metricLabel: "Inspected",
    gradient: "from-accent/80 to-primary",
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description: "Material verification, process control, and final audit against customer drawings.",
    icon: ShieldCheck,
    metric: "ISO",
    metricLabel: "Standards",
    gradient: "from-primary to-secondary",
  },
  {
    id: "dimensional-control",
    title: "Dimensional Control",
    description: "Micron-level measurement and reporting for critical industrial assemblies.",
    icon: Ruler,
    metric: "µm",
    metricLabel: "Level Control",
    gradient: "from-secondary via-primary to-accent",
  },
  {
    id: "production-capacity",
    title: "Production Capacity",
    description: "Single-piece prototypes to bulk OEM production with optimized scheduling.",
    icon: Factory,
    metric: "Bulk",
    metricLabel: "& Prototype",
    gradient: "from-[#0d4a6f] to-accent",
  },
  {
    id: "gauge-calibration",
    title: "Gauge & Metrology",
    description: "Height gauges, dial indicators, and vernier systems for traceable measurement.",
    icon: Gauge,
    metric: "0.001",
    metricLabel: "mm Resolution",
    gradient: "from-primary to-[#1565c0]",
  },
  {
    id: "job-work",
    title: "Industrial Job Work",
    description: "Complete machining and grinding services for manufacturers and engineering firms.",
    icon: Wrench,
    metric: "OEM",
    metricLabel: "Partner Ready",
    gradient: "from-accent to-primary",
  },
];

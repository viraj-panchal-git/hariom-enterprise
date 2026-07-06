export interface ToleranceSpec {
  label: string;
  value: string;
  unit: string;
}

export const toleranceSpecs: ToleranceSpec[] = [
  { label: "Diameter Tolerance", value: "±0.01", unit: "mm" },
  { label: "Parallelism", value: "0.005", unit: "mm" },
  { label: "Surface Finish", value: "Ra 0.4", unit: "µm" },
  { label: "Roundness", value: "0.003", unit: "mm" },
  { label: "Flatness", value: "0.005", unit: "mm" },
  { label: "Concentricity", value: "0.01", unit: "mm" },
];

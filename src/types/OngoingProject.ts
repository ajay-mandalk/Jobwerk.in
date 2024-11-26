// src/types/index.d.ts or src/types/OngoingProject.ts

export default interface OngoingProject {
  id: number;
  name: string;
  status:  "Trending" | "On Demand" | "Design Phase" | "In Production" | "Testing" | "Maintenance" | "Quality Control";
}


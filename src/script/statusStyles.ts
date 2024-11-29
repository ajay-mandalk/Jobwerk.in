export type Status = "Co-Own Mold" | "Jobwerk" | "For Rent" | "High Demand" | "Design Phase";

export const statusStyles: Record<Status, { bg: string; glow: string }> = {
  "Co-Own Mold": {
    bg: "bg-amber-100 text-amber-800",
    glow: "bg-amber-800",
  },
  "Jobwerk": {
    bg: "bg-green-100 text-green-800",
    glow: "bg-green-800",
  },
  "For Rent": {
    bg: "bg-blue-100 text-blue-800",
    glow: "bg-blue-800",
  },
  "High Demand": {
    bg: "bg-red-100 text-red-800",
    glow: "bg-red-800",
  },
  "Design Phase": {
    bg: "bg-yellow-100 text-yellow-800",
    glow: "bg-yellow-800",
  },
};
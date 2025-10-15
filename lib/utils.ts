import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// A utility function to merge Tailwind CSS classes, inspired by shadcn/ui.
// It allows for conditional and organized class name management.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// A utility function to merge Tailwind CSS classes, inspired by shadcn/ui.
// It allows for conditional and organized class name management.
export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}

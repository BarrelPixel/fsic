/** Two-digit index for running heads and section lists: 1 → "01". */
export const pad2 = (n: number) => String(n).padStart(2, '0');

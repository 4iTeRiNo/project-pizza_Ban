export const getDifficulty = (value: string): number => {
  if (value === 'Easy') return 1;
  if (value === 'Medium') return 2;
  return 3;
};

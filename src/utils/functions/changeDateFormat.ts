export const changeDateFormat = (date: string): number[] => {
  return date
    .split('-')
    .reverse()
    .map(num => +num);
};

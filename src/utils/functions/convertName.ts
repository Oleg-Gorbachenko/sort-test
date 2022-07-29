export const convertName = (name: string): string => {
  return name.includes('.') ? name.split('.')[1].trim() : name;
};

export const replaceName = (name: string): string => {
  const stringToArray = name.split(' ');

  [stringToArray[0], stringToArray[1]] = [stringToArray[1], stringToArray[0]];

  return stringToArray.join(' ');
};

import { dateArray } from '../enums';

import { changeDateFormat } from './changeDateFormat';

export const getAgeDifference = (birthday: string): number => {
  const currentDate = new Date();
  const birthDate = changeDateFormat(birthday);

  let years = currentDate.getFullYear() - birthDate[dateArray.getYear];

  if (
    currentDate.getMonth() < birthDate[dateArray.getMonth] ||
    (currentDate.getMonth() === birthDate[dateArray.getMonth] &&
      currentDate.getDate() < birthDate[dateArray.getDay])
  ) {
    years -= 1;
  }

  return years;
};

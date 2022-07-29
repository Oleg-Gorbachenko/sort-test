import { StateType } from '../types/types';

export const sortDown = (usersArray: StateType[], place: string): StateType[] => {
  return usersArray.sort((a: any, b: any) => {
    if (a[place] > b[place]) {
      return 1;
    }
    if (a[place] < b[place]) {
      return -1;
    }

    return 0;
  });
};

export const sortUp = (usersArray: StateType[], place: string): StateType[] => {
  return usersArray.sort((a: any, b: any) => {
    if (a[place] < b[place]) {
      return 1;
    }
    if (a[place] > b[place]) {
      return -1;
    }

    return 0;
  });
};

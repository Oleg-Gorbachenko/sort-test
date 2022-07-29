export type StateType = {
  id: number;
  birthday: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type SortByType = 'descending' | 'ascending';

export type SortButtonsPropsType = {
  onSortButtonClick: (category: string) => void;
  onCheckboxClick: (e: boolean) => void;
  isChecked: boolean;
};

export type UsersListPropsType = {
  usersArray: StateType[];
};

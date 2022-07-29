import React, { ReactElement, useEffect, useState } from 'react';

import { state } from '../../localState/state';
import { ageOfMajority } from '../../utils/constants';
import { convertName } from '../../utils/functions/convertName';
import { getAgeDifference } from '../../utils/functions/getAgeDifference';
import { replaceName } from '../../utils/functions/replaceName';
import { sortDown, sortUp } from '../../utils/functions/sortingFunc';
import { SortByType, StateType } from '../../utils/types/types';
import { SortButtons } from '../SortButtons';
import { UsersList } from '../UsersList';

import style from './style/App.module.sass';

export const App = (): ReactElement => {
  const [usersArray, setUsersArray] = useState<StateType[]>([...state]);
  const [sortBy, setSortBy] = useState<SortByType>('descending');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setUsersArray(
      state.map(user => {
        return { ...user, name: replaceName(convertName(user.name)) };
      }),
    );
  }, []);

  const onSortButtonClick = (category: string, sortBy: string): void => {
    if (category === 'birthday') {
      if (sortBy === 'descending') {
        setUsersArray(sortDown(usersArray, category));

        return setSortBy('ascending');
      }
      if (sortBy === 'ascending') {
        setUsersArray(sortUp(usersArray, category));

        return setSortBy('descending');
      }
    }
    if (category === 'name') {
      if (sortBy === 'descending') {
        setUsersArray(sortDown(usersArray, category));

        return setSortBy('ascending');
      }
      if (sortBy === 'ascending') {
        setUsersArray(sortUp(usersArray, category));

        return setSortBy('descending');
      }
    }
  };

  const onCheckboxClick = (e: boolean): void => {
    if (e) {
      setUsersArray(
        usersArray.filter(user => getAgeDifference(user.birthday) >= ageOfMajority),
      );

      return setIsChecked(e);
    }
    setUsersArray(
      state.map(user => {
        return { ...user, name: replaceName(convertName(user.name)) };
      }),
    );

    return setIsChecked(e);
  };

  return (
    <div className={style.App}>
      <SortButtons
        onSortButtonClick={category => onSortButtonClick(category, sortBy)}
        onCheckboxClick={e => onCheckboxClick(e)}
        isChecked={isChecked}
      />
      <UsersList usersArray={usersArray} />
    </div>
  );
};

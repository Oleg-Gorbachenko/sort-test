import React, { ChangeEvent, ReactElement } from 'react';

import { SortButtonsPropsType } from '../../utils/types/types';
import { Button } from '../Button/Button';

import style from './style/SortButtons.module.sass';

export const SortButtons = ({
  onSortButtonClick,
  onCheckboxClick,
  isChecked,
}: SortButtonsPropsType): ReactElement => {
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
    onCheckboxClick(e.currentTarget.checked);
  };

  return (
    <div className={style.wrapper}>
      <Button name="Sort by name" onClick={() => onSortButtonClick('name')} />
      <Button name="Sort by age" onClick={() => onSortButtonClick('birthday')} />
      <div className={style.inputWrapper}>
        <span>Is adult: </span>
        <input type="checkbox" onChange={handleCheckbox} checked={isChecked} />
      </div>
    </div>
  );
};

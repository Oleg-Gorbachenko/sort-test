import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import s from './style/Button.module.sass';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  red?: boolean;
  name?: string;
};

export const Button: React.FC<SuperButtonPropsType> = ({
  red,
  className,
  name,
  ...restProps
}) => {
  const finalClassName = `${s.default} ${red ? s.red : ''} ${className || ''}`;

  return (
    <button type="button" className={finalClassName} {...restProps}>
      {name}
    </button>
  );
};

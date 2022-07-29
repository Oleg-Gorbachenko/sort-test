import React, { ReactElement } from 'react';

import { UsersListPropsType } from '../../utils/types/types';

import style from './style/UsersList.module.sass';

export const UsersList = ({ usersArray }: UsersListPropsType): ReactElement => {
  return (
    <div className={style.tableMainBlock}>
      <table className="table">
        <thead>
          <tr className={style.trStyle}>
            <th>birthday</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {usersArray.map(({ id, birthday, name, username, email, phone, website }) => (
            <tr key={id}>
              <td>{birthday}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

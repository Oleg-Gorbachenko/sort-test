import { sortDown, sortUp } from '../functions/sortingFunc';
import { StateType } from '../types/types';

let initState: StateType[];

beforeEach(() => {
  initState = [
    {
      id: 1,
      birthday: '1990-06-23',
      name: 'Graham Leanne',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    },
    {
      id: 2,
      birthday: '1984-03-22',
      name: 'Howell Ervin',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
    },
  ];
});

test('sort by last name descending', () => {
  const newState = sortDown(initState, 'name');

  // eslint-disable-next-line no-magic-numbers
  expect(newState.length).toBe(2);
  expect(newState[0].name).toBe('Graham Leanne');
});
test('sort by last name ascending', () => {
  const newState = sortUp(initState, 'name');

  // eslint-disable-next-line no-magic-numbers
  expect(newState.length).toBe(2);
  expect(newState[0].name).toBe('Howell Ervin');
});
test('sort by age ascending', () => {
  const newState = sortUp(initState, 'birthday');

  // eslint-disable-next-line no-magic-numbers
  expect(newState.length).toBe(2);
  expect(newState[0].birthday).toBe('1990-06-23');
});
test('sort by age ascending', () => {
  const newState = sortDown(initState, 'birthday');

  // eslint-disable-next-line no-magic-numbers
  expect(newState.length).toBe(2);
  expect(newState[0].birthday).toBe('1984-03-22');
});

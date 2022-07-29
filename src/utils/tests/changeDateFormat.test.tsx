import { changeDateFormat } from '../functions/changeDateFormat';

let initState: string[];

beforeEach(() => {
  initState = ['1990-06-23', '5990-06-23'];
});

test('correct date format change', () => {
  const newState = changeDateFormat(initState[0]);

  // eslint-disable-next-line no-magic-numbers
  expect(newState[0]).toBe(23);
  // eslint-disable-next-line no-magic-numbers
  expect(newState[1]).toBe(6);
  // eslint-disable-next-line no-magic-numbers
  expect(newState[2]).toBe(1990);
});

test('wrong calculation of the age difference', () => {
  const newState = changeDateFormat(initState[0]);

  expect(newState).not.toBe('1990-06-23');
  expect(newState).not.toBe('23-1990-06');
  // eslint-disable-next-line no-magic-numbers
  expect(newState).not.toBe(1990 - 6 - 23);
  // eslint-disable-next-line no-magic-numbers
  expect(newState).not.toBe(23 - 1990 - 6);
});

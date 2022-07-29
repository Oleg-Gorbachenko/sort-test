import { getAgeDifference } from '../functions/getAgeDifference';

let initState: string[];

beforeEach(() => {
  initState = ['1990-06-23', '5990-06-23'];
});

test('correct calculation of the age difference', () => {
  const newState = getAgeDifference(initState[0]);

  // eslint-disable-next-line no-magic-numbers
  expect(newState).toBe(32);
  expect(newState).not.toBe('32');
});

test('wrong calculation of the age difference', () => {
  const newState = getAgeDifference(initState[1]);

  // eslint-disable-next-line no-magic-numbers
  expect(newState).toBe(-3968);
  expect(newState).not.toBe('-3968');
});

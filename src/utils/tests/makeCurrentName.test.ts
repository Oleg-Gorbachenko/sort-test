import { convertName } from '../functions/convertName';

let initState: string[];

beforeEach(() => {
  initState = ['Mrs. Smith', 'Mr. Smith', 'James Bond'];
});

test('point check condition', () => {
  const convertedName = convertName(initState[0]);
  // eslint-disable-next-line no-magic-numbers
  const nameNotConverted = convertName(initState[2]);

  expect(convertedName).toBe('Smith');
  expect(convertedName).not.toBe('Mrs. Smith');
  expect(convertedName).not.toBe('Mrs');
  expect(nameNotConverted).toBe('James Bond');
  expect(nameNotConverted).not.toBe('James');
  expect(nameNotConverted).not.toBe('Bond');
});

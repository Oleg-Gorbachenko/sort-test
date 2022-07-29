import { replaceName } from '../functions/replaceName';

let initState: string[];

beforeEach(() => {
  initState = [
    'Oleg Gorbachenko Viktorovich',
    'Yuri Dud',
    'Elon Musk',
    'Amiran Sardarov',
    'Nadezhda Babkina',
  ];
});

test('correct replace', () => {
  const newState = replaceName(initState[0]);

  // eslint-disable-next-line no-magic-numbers
  expect(initState.length).toBe(5);
  expect(newState).toBe('Gorbachenko Oleg Viktorovich');
});

test('wrong replace', () => {
  const newState = replaceName(initState[0]);

  // eslint-disable-next-line no-magic-numbers
  expect(initState.length).not.toBe(4);
  // eslint-disable-next-line no-magic-numbers
  expect(initState.length).not.toBe(6);
  expect(newState).not.toBe('Oleg Gorbachenko Viktorovich');
  expect(newState).not.toBe('Viktorovich Gorbachenko Oleg');
});

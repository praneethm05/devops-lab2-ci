const { add, isEven, greet } = require('../src/app');

test('add returns sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('isEven detects even and odd numbers', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(7)).toBe(false);
});

test('greet returns greeting message', () => {
  expect(greet('DevOps')).toBe('Hello, DevOps!');
});

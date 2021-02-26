const repeatedString = require('../hacker/repeatedString');
const num = 10
const s = 'abc'
test('Calculate Number of repeted characters', () => {
  expect(repeatedString(s, num).toBe(4))
});
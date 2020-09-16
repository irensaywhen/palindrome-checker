const isPalindrome = require('./checker');

test('isPalindrome("eye") should return a boolean.', () => {
  expect(typeof isPalindrome('eye')).toBe('boolean');
});

test('"eye is palindrome', () => {
  expect(isPalindrome('eye')).toBe(true);
});

test('"_eye" is palindrome', () => {
  expect(isPalindrome('_eye')).toBe(true);
});

test('"race car" is palindrome', () => {
  expect(isPalindrome('race car')).toBe(true);
});

test('"not a palindrome" is not a palindrome', () => {
  expect(isPalindrome('not a palindrome')).toBe(false);
});

test('"A man, a plan, a canal. Panama" is palindrome', () => {
  expect(isPalindrome('A man, a plan, a canal. Panama')).toBe(true);
});

test('"never odd or even" is a palindrome', () => {
  expect(isPalindrome('never odd or even')).toBe(true);
});

test('"nope" is not a palindrome', () => {
  expect(isPalindrome('nope')).toBe(false);
});

test('"almostomla" is not a palindrome', () => {
  expect(isPalindrome('almostomla')).toBe(false);
});

test('"My age is 0, 0 si ega ym." is a palindrome', () => {
  expect(isPalindrome('My age is 0, 0 si ega ym.')).toBe(true);
});

test('"1 eye for of 1 eye." is not a palindrome', () => {
  expect(isPalindrome('1 eye for of 1 eye.')).toBe(false);
});

test('"0_0 (: /- :) 0-0" is a palindrome', () => {
  expect(isPalindrome('0_0 (: /- :) 0-0')).toBe(true);
});

test('"five|_/|four" is not a palindrome', () => {
  expect(isPalindrome('five|_/|four')).toBe(false);
});

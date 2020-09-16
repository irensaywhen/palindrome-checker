function isPalindrome(str) {
  str = str.replace(/[\W_]*/gi, '').toLowerCase();

  let reverseString = str.split('').reverse().join('');

  return str === reverseString;
}

module.exports = isPalindrome;

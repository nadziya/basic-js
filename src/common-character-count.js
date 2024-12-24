const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = [];
  const arr2 = [];
  let result = 0;
  for (let i = 0; i < s1.length; i += 1) {
     arr1.push(s1[i]);
  }
  for (let j = 0; j < s2.length; j += 1) {
     arr2.push(s2[j]);
  }
  for (let k = 0; k < arr2.length; k += 1) {
      if (arr1.indexOf(arr2[k]) !== -1) {
          result += 1 ;
          tempArr1 = arr1.indexOf(arr2[k]);
          arr1.splice(tempArr1, 1, '');
      }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};

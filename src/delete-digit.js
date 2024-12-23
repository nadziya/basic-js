const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newN = n.toString();
  let digitN = [];
  let result = 0;
  for (let i = 0; i < newN.length; i += 1) {
         digitN.push(newN.replace(newN[i],'')); 
  }
  if (digitN !== undefined && digitN.length !== 0) {
      result = Math.max(...digitN);
  }
  return result;
}

module.exports = {
  deleteDigit
};

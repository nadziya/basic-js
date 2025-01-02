const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = 0;
  let stringDigit = n.toString();
  let len = stringDigit.length;
  if (len === 1) {
      result = n;
  } else if ( len === 2) {
      result = Number(stringDigit[0]) + Number(stringDigit[1]);
      if (result === 10) {
          result = 1;
      } else if ( result > 10) {
        let spec = result.toString();
        result = Number(spec[0]) + Number(spec[1]);
      }
  } else if ( len === 3) {
      result = Number(stringDigit[0]) + Number(stringDigit[1]) + Number(stringDigit[2]);
      if ( result === 10) {
          result = 1;
      } else if (result > 10 && result < 100) {
          let nev = result.toString();
          result = Number(nev[0]) + Number(nev[1]);
      } else if (result > 100) {
          let ner = result.toString;
          result = Number(ner[0]) + Number(ner[1]) + Number(ner[2]);
      }
  }
  return result;
}

module.exports = {
  getSumOfDigits
};

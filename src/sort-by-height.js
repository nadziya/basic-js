const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let minusOne = [];
  let sortedOne = [];
  for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === - 1){
        minusOne.push(i);
      } else {
       sortedOne.push(arr[i]);
      }
  } 
  result = sortedOne.sort((a, b) => a - b);
  for (let j = 0; j < minusOne.length; j += 1){
     result.splice(minusOne[j], 0, -1);
  }
  return result;
}

module.exports = {
  sortByHeight
};

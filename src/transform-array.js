const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = []; 
  let arrBegin = [];
  let arrTail = [];
 
  if ( arguments.length === 0) {
     result = [];
  } else if (Array.isArray(arr) === false) {
      throw new TypeError('\'arr\' parameter must be an instance of the Array!');
  } else  if (arr.includes('--discard-next') === true && arr.includes('--double-prev') === true) { 
       for (let i = 0; i < arr.length; i += 1) {
          if (arr[i] === '--discard-next' ) {
              arrBegin = arr.slice(0, i);
              arrTail = arr.slice (i + 2);
              result = result.concat(arrBegin, arrTail);             
          }
          if (arr[i + 2] === '--double-prev'){
              arrBegin = result.slice(0, i);
              arrTail = result.slice(i + 1);            
              let a = [];
              result = a.concat(arrBegin, arrTail);         
          }
       }
  } else if (arr.includes('--double-next') === true && arr.includes('--double-prev') === true){
        let index = arr.indexOf('--double-next');
        let index2 = arr.indexOf('--double-prev');
        arrBegin = arr.slice(0, index);
        arrBegin.push(arr[index + 1]);
        arrBegin.push(arr[index + 1]);
        arrBegin.push(arr[index + 1]);
        arrTail = arr.slice(index2 + 1);
        result = result.concat(arrBegin, arrTail);
        
  } else if (arr.includes('--discard-next') === true && arr.includes('--discard-prev') === true) {
      let index = arr.indexOf('--discard-next');
      let index2 = arr.indexOf('--discard-prev');
      arrBegin = arr.slice(0, index);
      arrTail = arr.slice(index2 + 1);
      result = result.concat(arrBegin, arrTail);
  } else if (arr.includes('--double-next') === true && arr.includes('--discard-prev') === true) {
      let index = arr.indexOf('--double-next');
      let index2 = arr.indexOf('--discard-prev');
      arrBegin = arr.slice(0, index);
      arrBegin.push(arr[index + 1]);
      arrTail = arr.slice(index2 + 1);
      result = result.concat(arrBegin, arrTail);
  } else {
     for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
        arrBegin = arr.slice(0, i);
        arrBegin.push(arr[i + 1]);
        arrTail = arr.slice(i + 1);
        result = result.concat(arrBegin, arrTail);
      } else if (arr[i] === '--double-next' && i + 1 >= arr.length) {
          result = arr.slice(0, i);
      } else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined) {
          arrBegin = arr.slice(0, i);
          arrBegin.push(arr[i - 1]);
          arrTail = arr.slice(i + 1);
          result = result.concat(arrBegin,arrTail);
      } else if (arr[i] === '--double-prev' && i - 1 < 0) {
          result = arr.slice(i + 1);
      } else if (arr[i] === '--discard-next' && arr[i + 1] !==undefined) {
          arrBegin = arr.slice(0, i);
          console.log(arrBegin);
          arrTail = arr.slice(i + 2);
          console.log(arrTail);
          result = result.concat(arrBegin, arrTail);
      } else if (arr[i] === '--discard-next' && i + 1 >= arr.length) {
          result = arr.slice(0, arr.length - 1);
      } else if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined) {
         arrBegin = arr.slice(0, i - 1);
         console.log(arrBegin);
         arrTail = arr.slice(i + 1);
         console.log(arrTail);
         result = result.concat(arrBegin, arrTail);
      } else if (arr[i] === '--discard-prev' && i - 1 < 0) {
         result = arr.slice(i + 1);
      } 
  }
  if (result.length === 0) {
          result = result.concat(arr);
      }
  }
  return result;
}

module.exports = {
  transform
};

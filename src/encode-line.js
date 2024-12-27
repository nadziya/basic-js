const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';
     if (str === '') {
        result = '';
     }
     for (let i = 0; i < str.length; i += 1) {
         if (str[i] === str[[i + 1]] && i + 1 <= str.length){
             count += 1;      
         } else if (count === 1){
             result = `${result}${str[i]}`;
         } else if (count > 1) {
             result = `${result}${count}${str[i]}`;
             count = 1;
         }    
     }
     return result.trim();
   }

module.exports = {
  encodeLine
};

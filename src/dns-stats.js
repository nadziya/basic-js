const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let duplic = [];
  let duplic2 = [];
  let duplic3 = [];
  let str = '';
  let str2 = '';
  let str3 = '';
  let firstInd = 0;
  let lastInd = 0;
  let updIndex = 0;
  let count = 0;
  
  for (let i = 0; i < domains.length; i += 1) {
      lastInd = domains[i].lastIndexOf('.');
      str = domains[i].slice(lastInd);  
      count  = 0;
      for (let j = 0; j < domains[i].length; j += 1) {
          if (domains[i][j] === '.') {
              count += 1;
          }
      }
      if ( count > 1) {
        firstInd = domains[i].indexOf('.');
        str2 = domains[i].slice(firstInd);
        updIndex = str2.lastIndexOf('.');
        str2 = str + str2.slice(0, updIndex);
        str3 = str2 + '.' + domains[i].slice(0, firstInd);
      } else if (count === 1){
          firstInd = domains[i].indexOf('.'); 
          str2 = str + '.' + domains[i].slice(0,firstInd);
          str3 = '';
      } 
      duplic.push(str);
      duplic2.push(str2);
      duplic3.push(str3);
      
  }
  function countDup(duplic) {
      for (const item of duplic) {
          result[item] = result[item] ? result[item] + 1: 1;
  }
  return result;  
  }
  countDup(duplic);
  countDup(duplic2);
  countDup(duplic3);
  function removeFromObjectByKey(object, key){
      delete object[key];
  }
  removeFromObjectByKey(result, '');
  return result;
}

module.exports = {
  getDNSStats
};

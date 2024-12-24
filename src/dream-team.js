const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  result = [];
  let arr = [];
  if (members === undefined ||
      members === null ||
      members.length === undefined || 
      members.length === 0 ||
      typeof members !== 'object') {
    result = false;
  } else {
     for (let i = 0; i < members.length; i += 1){
         arr[i]= members[i];
         console.log(arr[i]);
      if (typeof arr[i] === 'string') {
          arr[i] = arr[i].trim();
          result.push(arr[i][[0]]);
        }
    }
     for (let j = 0; j < result.length; j += 1) {
          result[j] = result[j].toUpperCase();
     }
      result = result.sort().join('');
  }
  return result;
 }

module.exports = {
  createDreamTeam
};

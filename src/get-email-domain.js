const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const mailSymbol = '@';
  let result = '';
  for (let i = 0; i < email.length; i += 1) {
     if (email[i] === mailSymbol && email[i + 1] !== '.') {
      const indexOfMailSymbol = email.indexOf(mailSymbol);
      result = email.substring(indexOfMailSymbol + 1);
     } else {
      const indexLastMailSymbol = email.lastIndexOf(mailSymbol);
      result = email.substring(indexLastMailSymbol + 1);
     }
  }
  return result;
}

module.exports = {
  getEmailDomain
};

const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let result = 0;
  if (sampleActivity === undefined || 
      sampleActivity === null || 
      Number.isNaN(sampleActivity) !== false ||
      typeof sampleActivity !== 'string') {
     result = false;
  } else {
      result = Math.ceil(Math.trunc(Math.round(Math.log(MODERN_ACTIVITY / sampleActivity) * 1000) / 1000 / 0.693 * 1000) / 1000 * HALF_LIFE_PERIOD);
  }
  return result;
}

module.exports = {
  dateSample
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

if ('repeatTimes' in options === true && 
  'separator' in options === false &&
  'addition' in options === false &&
  'additionRepeatTimes' in options === false &&
  'additionSeparator' in options === false) {
    for (let i = 1; i <= options.repeatTimes; i += 1) {
      result = `${str}+${result}`;
    }
    result = result.slice(0, result.length - 1);
} else if ('repeatTimes' in options === true && 
         'separator' in options === true &&
         'addition' in options === false &&
         'additionRepeatTimes' in options === false &&
         'additionSeparator' in options === false) {
          for (let i = 1; i <= options.repeatTimes; i += 1) {
              result = `${str}${options.separator}${result}`;
            }
          result = result.slice(0, result.length - options.separator.length);  
} else if ('repeatTimes' in options === true && 
  'separator' in options === true &&
  'addition' in options === true &&
  'additionRepeatTimes' in options === true &&
  'additionSeparator' in options === false) {
      let multi = options.addition.repeat(options.additionRepeatTimes);
      for (let i = 1; i <= options.repeatTimes; i += 1) {       
          result = `${str}${multi}${options.separator}${result}`;
        }
        result = result.slice(0, result.length - options.separator.length);  
} else if ('repeatTimes' in options === true && 
  'separator' in options === true &&
  'addition' in options === true &&
  'additionRepeatTimes' in options === true &&
  'additionSeparator' in options === true) {
     let multi = options.addition + options.additionSeparator;
      let multiRepiter = multi.repeat(options.additionRepeatTimes); 
      multiRepiter = multiRepiter.slice(0, multiRepiter.length - options.additionSeparator.length); 
   for (let i = 0; i < options.repeatTimes; i +=1) {  
      result = `${str}${multiRepiter}${options.separator}${result}`;
   }
  result = result.slice(0, result.length - options.separator.length);
} else if ('repeatTimes' in options === true && 
  'separator' in options === false &&
  'addition' in options === true &&
  'additionRepeatTimes' in options === true &&
  'additionSeparator' in options === false) {
      let multi = `${options.addition}|`.repeat(options.additionRepeatTimes);
      console.log(multi);
      multi = multi.slice(0, multi.length - 1);
      for (let i = 0; i < options.repeatTimes; i +=1) {  
          result = `${str}${multi}+${result}`;
       }
        result = result.slice(0, result.length - 1);
} else if ('repeatTimes' in options === true && 
  'separator' in options === false &&
  'addition' in options === true &&
  'additionRepeatTimes' in options === true &&
  'additionSeparator' in options === true) {
      let multi = options.addition + options.additionSeparator;
      let multiRepiter = multi.repeat(options.additionRepeatTimes); 
      multiRepiter = multiRepiter.slice(0, multiRepiter.length - options.additionSeparator.length); 
   for (let i = 0; i < options.repeatTimes; i +=1) {
        result = `${str}${multiRepiter}+${result}`;
  }
  result = result.slice(0, result.length - 1);
} else if ('repeatTimes' in options === false && 
  'separator' in options === true &&
  'addition' in options === true &&
  'additionRepeatTimes' in options === false &&
  'additionSeparator' in options === true) {
        result = `${str}${options.addition}`;
  } 
return result;
}
module.exports = {
  repeater
};

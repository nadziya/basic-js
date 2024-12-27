const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const dublic = names.filter((e, i, a) => a.indexOf(e) !== i);
  console.log(dublic);
  let count = 1;
  for (let i = 0; i < dublic.length; i += 1) {
      let firstInd = names.indexOf(dublic[i]);
      for (let j = firstInd + 1; j < names.length; j += 1) {
          if (dublic[i] === names[j]) {
              names[j] = `${names[j]}(${count})`;
              count += 1;
          }
      }
  }
  const dublic2 = names.filter((e, i, a) => a.indexOf(e) !== i);
  console.log(dublic2);
  let count2 = 1;
  for (let i = 0; i < dublic2.length; i += 1) {
      let firstInd2 = names.indexOf(dublic2[i]);
      for (let j = firstInd2 + 1; j < names.length; j += 1) {
          if (dublic2[i] === names[j]) {
              names[j] = `${names[j]}(${count2})`;
              count2 += 1;
          }
      }
  }
  return names;
}

module.exports = {
  renameFiles
};

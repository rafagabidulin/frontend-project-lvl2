import _ from 'lodash';
import readFile from './parsing.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keys = _.union(keys1, keys2).sort();

  const arr = [];
  keys.map((key) => {
    if (!_.has(file1, key)) {
      arr.push(`  + ${key}: ${file2[key]}`);
    } else if (!_.has(file2, key)) {
      arr.push(`  - ${key}: ${file1[key]}`);
    } else if (file1[key] !== file2[key]) {
      arr.push(`  - ${key}: ${file1[key]}`);
      arr.push(`  + ${key}: ${file2[key]}`);
    } else {
      arr.push(`    ${key}: ${file1[key]}`);
    }
    return arr;
  });
  return ['{', ...arr, '}'].join('\n');
};

export default genDiff;

import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const parseFile = (filepath) => {
  const checkPath = path.isAbsolute(filepath) ? filepath : path.resolve(filepath);
  const file = fs.readFileSync(checkPath, 'utf-8');
  return JSON.parse(file);
};

const genDiff = (filepath1, filepath2) => {
  const file1 = parseFile(filepath1);
  const file2 = parseFile(filepath2);
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const result = keys.reduce((arr, key) => {
    if (!_.has(file1, key)) {
      arr.push(`+ ${key}: ${file2[key]}`);
    } else if (!_.has(file2, key)) {
      arr.push(`- ${key}: ${file1[key]}`);
    } else if (file1[key] !== file2[key]) {
      arr.push(`- ${key}: ${file1[key]}`);
      arr.push(`+ ${key}: ${file2[key]}`);
    } else if (file1[key] === file2[key]) {
      arr.push(`  ${key}: ${file1[key]}`);
    }
    return arr;
  }, []);
  return ['{', ...result, '}'].join('\n');
};

export default genDiff;

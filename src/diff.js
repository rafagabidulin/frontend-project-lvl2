import { extname } from 'path';
import readFile from './readFile.js';
import parseFile from './parsers.js';
import genTree from './genTree.js';
import diffTree from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);

  const file1 = parseFile(readFile1, extname(filepath1));
  const file2 = parseFile(readFile2, extname(filepath2));

  const tree = genTree(file1, file2);

  const result = diffTree(tree, format);
  return result;
};

export default genDiff;

import { extname } from 'path';
import readFile from './readFile.js';
import stylish from './stylish.js';
import parseFile from './parsers.js';
import genTree from './genTree.js';

const genDiff = (filepath1, filepath2) => {
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);

  const file1 = parseFile(readFile1, extname(filepath1));
  const file2 = parseFile(readFile2, extname(filepath2));

  const tree = genTree(file1, file2);

  const result = stylish(tree);
  return result;
};

export default genDiff;

import fs from 'fs';
import path from 'path';

const parseFile = (filepath) => {
  const checkPath = path.isAbsolute(filepath) ? filepath : path.resolve('__fixtures__', filepath);
  const file = fs.readFileSync(checkPath, 'utf-8');
  return JSON.parse(file);
};

export default parseFile;

import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const tests = [
  {
    filename1: 'filepath1.json', filename2: 'filepath2.json', output: 'expectedOutput.txt',
  },
  {
    filename1: 'filepath1.yml', filename2: 'filepath2.yml', output: 'expectedOutput.txt',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'expectedNested.txt', format: 'stylish',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yml', output: 'expectedNested.txt', format: 'stylish',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'expectedPlain.txt', format: 'plain',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yml', output: 'expectedPlain.txt', format: 'plain',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'expectedJSON.txt', format: 'json',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yml', output: 'expectedJSON.txt', format: 'json',
  },
];

test.each(tests)('gendiff stylish, plain and json tests', ({
  filename1, filename2, output, format,
}) => {
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);
  const expected = readFile(output);
  const result = genDiff(filepath1, filepath2, format);
  expect(result).toEqual(expected);
});

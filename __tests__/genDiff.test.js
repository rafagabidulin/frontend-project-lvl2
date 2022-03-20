import path from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import expectedJSON from '../__fixtures__/expectedJSON.txt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.__dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('difference between two JSONs', () => {
  const filepath1 = getFixturePath('../__fixtures__/file1.json');
  const filepath2 = getFixturePath('../__fixtures__/file2.json');

  expect(genDiff(filepath1, filepath2)).toBe(expectedJSON);
});

import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const expectedJSON = readFile('expectedJSON.txt');
const expectedYAML = readFile('expectedYAML.txt');

test('difference between two JSONs', () => {
  expect(genDiff('file1.json', 'file2.json')).toBe(expectedJSON);
});

test('difference between two YAMLs', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toBe(expectedYAML);
});

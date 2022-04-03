import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const expectedPlain = readFile('expectedPlain.txt');
const expectedNested = readFile('expectedNested.txt');

test('difference between two JSONs', () => {
  expect(genDiff('filepath1.json', 'filepath2.json')).toEqual(expectedPlain);
});

test('difference between two YAMLs', () => {
  expect(genDiff('filepath1.yml', 'filepath2.yml')).toEqual(expectedPlain);
});

test('difference between two nested JSONs', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedNested);
});

test('difference between two nested YAMLs', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectedNested);
});

import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const expectedOutput = readFile('expectedOutput.txt');
const expectedNested = readFile('expectedNested.txt');
const expectedPlain = readFile('expectedPlain.txt');
const expectedJSON = readFile('expectedJSON.txt');

test('difference between two JSONs', () => {
  expect(genDiff('filepath1.json', 'filepath2.json')).toEqual(expectedOutput);
});

test('difference between two YAMLs', () => {
  expect(genDiff('filepath1.yml', 'filepath2.yml')).toEqual(expectedOutput);
});

test('difference between two nested JSONs', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedNested);
});

test('difference between two nested YAMLs', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectedNested);
});

test('difference between nested JSON and YAML', () => {
  expect(genDiff('file1.json', 'file2.yml')).toEqual(expectedNested);
});

test('difference between two JSONs with plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(expectedPlain);
});

test('difference between two YAMLs with plain', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toEqual(expectedPlain);
});

test('difference between two JSONs with JSON format', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(expectedJSON);
});

test('difference between two YAMLs with JSON format', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'json')).toEqual(expectedJSON);
});

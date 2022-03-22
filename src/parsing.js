import fs, { readFileSync } from 'fs';
import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const parseFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');


export default parseFile;

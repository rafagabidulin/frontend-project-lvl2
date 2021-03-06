import { load } from 'js-yaml';

const parseFile = (filename, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(filename);
    case '.yml':
      return load(filename);
    case '.yaml':
      return load(filename);
    default:
      throw new Error('Incorrect file format');
  }
};

export default parseFile;

const getValue = (value) => {
  if (value instanceof Object) {
    return '[complex value]';
  }
  return typeof (value) === 'string' ? `'${value}'` : value;
};

const plain = (nodes) => {
  const iter = (node, acc = '') => {
    const {
      key,
      type,
      value,
      children,
      removedValue,
      addedValue,
    } = node;

    switch (type) {
      case 'nested': {
        return children.map((child) => iter(child, `${acc}${key}.`)).join('');
      }
      case 'removed': {
        return `\nProperty '${acc}${key}' was removed`;
      }
      case 'added': {
        return `\nProperty '${acc}${key}' was added with value: ${getValue(value)}`;
      }
      case 'updated': {
        return `\nProperty '${acc}${key}' was updated. From ${getValue(removedValue)} to ${getValue(addedValue)}`;
      }
      default:
        return null;
    }
  };

  return iter(nodes).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

export default plain;

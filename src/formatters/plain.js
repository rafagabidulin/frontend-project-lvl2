const getValue = (value) => {
  if (value instanceof Object) {
    return '[complex value]';
  }
  return typeof (value) === 'string' ? `${value}` : value;
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
      case 'root': {
        return children.map((child) => iter(child, key)).join('');
      }
      case 'nested': {
        return children.map((child) => iter(child, `${acc}${key}.`)).join('');
      }
      case 'removed': {
        return `Property ${acc}${key} was removed`;
      }
      case 'added': {
        return `Property ${acc}${key} was added with value: ${getValue(value)}`;
      }
      case 'updated': {
        return `Property ${acc}${key} was updated. From ${removedValue} to ${getValue(addedValue)}`;
      }
      default:
        return null;
    }
  };
  return iter(nodes).filter((child) => child !== null).join('\n');
};

export default plain;

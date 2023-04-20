const itemCounterFunction = async (item, element) => {
  if (item.length === 0 || !item) {
    element.innerHTML = ' (0)';
  } else {
    element.innerHTML = ` (${item.length})`;
  }
};

export default itemCounterFunction;
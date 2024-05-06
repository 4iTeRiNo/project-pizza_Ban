export function getAllTreeItems<T>(tree: T): T[] {
  const result: T[] = [];
  if (Array.isArray(tree)) {
    return tree.reduce((acc, cur) => {
      return acc.concat(getAllTreeItems(cur));
    }, []);
  } else {
    result.push(tree);
  }
  return result;
}

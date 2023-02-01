import { isArray } from 'lodash-es';

interface IChildren<T> {
  children: T[];
}

export function flattenChildren<T extends IChildren<T>>(list: T[] = []) {
  const result: T[] = [];
  list.forEach((item) => {
    if (isArray(item.children) && item.children.length > 0) {
      result.push(...flattenChildren(item.children));
    }
    // item.children = [];
    result.push(item);
  });

  return result;
}

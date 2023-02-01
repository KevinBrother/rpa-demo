import { flattenChildren } from './flattenChildren';

function formatKey(key: string) {
  return `choose_fear_${key}`.toUpperCase();
}

function getData(key: string) {
  const str = localStorage.getItem(formatKey(key)) as string;
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

function setData(key: string, data: ISafeAny) {
  localStorage.setItem(formatKey(key), JSON.stringify(data));
}

export const CategoryRootPId = '0';

// - [x] 遍历整棵树
// 查找到某个节点
// - [x] 查找某个节点的所有子节点
// - [x] 给某个节点添加子节点
const categoryData = [
  {
    id: '1',
    pId: CategoryRootPId,
    name: '江苏',
    desc: '不错',
    children: [
      {
        id: '1-1',
        pId: '1',
        name: '南通',
        desc: '很好',
        children: [
          {
            id: '1-1-1',
            pId: '1-1',
            name: '通州',
            desc: '人杰地灵',
            children: []
          }
        ]
      },
      {
        id: '1-2',
        pId: '1',
        name: '南京',
        desc: '不错呀',
        children: []
      }
    ]
  },
  {
    id: '2',
    pId: CategoryRootPId,
    name: '浙江',
    desc: '不错',
    children: [
      {
        id: '2-1',
        pId: '2',
        name: '杭州',
        desc: '很好',
        children: []
      },
      {
        id: '2-2',
        pId: '2',
        name: '萧山',
        desc: '不错呀',
        children: []
      }
    ]
  }
];

const flattenedData = flattenChildren(categoryData);

class Storage {
  constructor() {
    // 如果有数据，则不设置初始值
    if (getData('categoryList')) {
      return;
    }
    setData('categoryList', flattenedData);
  }

  get categoryList(): ICategory[] {
    return getData('categoryList') || [];
  }
  set categoryList(data: ICategory[]) {
    setData('categoryList', data);
  }
}

const $storage = new Storage();

// window.$storage = $storage;

export { $storage };

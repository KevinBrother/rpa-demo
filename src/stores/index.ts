import { makeAutoObservable } from 'mobx';
import { $storage, CategoryRootPId } from '@/utils';
import { cloneDeep } from 'lodash-es';

// TODO 2022年10月1日 23:41:59 通过树来存取，
// TODO 再往后应该把部分逻辑移到后端让数据库处理更方便,但现在做后端更费时间
class Category {
  categoryList = $storage.categoryList;

  constructor() {
    makeAutoObservable(this);
  }

  getCategoryById(id: string) {
    console.log('%c [ id ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', id);
    // 兼容顶层元素 TODO 2022年10月3日 00:47:56 初始化值需要定义
    // if (id === CategoryRootPId) {
    //   return this.getCategoryByPId(id)
    // }
    return this.categoryList.filter((c) => c.id === id) || [];
  }

  getChildrenByCategoryId(id: string) {
    // 兼容顶层元素 TODO 2022年10月3日 00:47:56 初始化值需要定义
    return this.categoryList.filter((c) => c.pId === id) || [];
  }

  addCategory(category: ICategory) {
    const parentCategory = this.categoryList.find((c) => c.id === category.pId);
    // 没有父亲节点，且不是根节点就是false
    if (!parentCategory && category.pId !== CategoryRootPId) {
      return false;
    }

    this.categoryList.push(category);
    $storage.categoryList = this.categoryList;

    return true;
  }

  editCategory(category: ICategory) {
    const _categoryList = cloneDeep(this.categoryList);

    const prevCategory = _categoryList.find((c) => c.id === category.id);
    if ((category && !category.id) || !prevCategory) {
      return false;
    }
    // console.log('%c [ editCategory category ]-31', 'font-size:13px; background:pink; color:#bf2c9f;', category)

    prevCategory.name = category.name;
    prevCategory.desc = category.desc;

    this.categoryList = _categoryList;
    $storage.categoryList = this.categoryList;

    return true;
  }
}

export const categoryStore = new Category();

import { useState, useCallback } from 'react';
import { categoryService } from '@/services/category';
import { CategoryRootPId, randomChoose } from '@/utils';
import { useRequest } from 'ahooks';

export function useSelectedTags(categoryList: ICategory[]) {
  // const [selectedCategory, setSelectedCategory] = useImmer<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory[]>([]);

  const startSelect = useCallback(() => {
    if (categoryList.length === 0) {
      return;
    }

    /*     
    // TODO 2022年10月30日 19:05:57 mobx和useImmer怎么才能一起用？
    setSelectedCategory(draft => {
      console.log('%c [ categoryList ]-34', 'font-size:13px; background:pink; color:#bf2c9f;', categoryList, toJS(categoryList))
      draft.push(toJS(categoryList[0]));
    })
    */

    setSelectedCategory([...selectedCategory, randomChoose(categoryList)]);
  }, [categoryList, selectedCategory]);

  // TODO 2022年10月31日 10:25:24 删除功能的逻辑不确定是否需要
  const removeSelected = useCallback((id: string) => {
    console.log(id);
  }, []);

  return { selectedCategory, setSelectedCategory, startSelect, removeSelected };
}

export function useRootCategory() {
  const [rootCategory, setRootCategory] = useState<ICategory[]>([]);

  // 下拉选项数据
  useRequest(() => categoryService.getChildrenByCategoryId(CategoryRootPId), {
    onSuccess(categoryList) {
      setRootCategory(categoryList);
    }
  });

  return { rootCategory, setRootCategory };
}

export function useTableData(currentCategoryId: string) {
  const [tableData, setTableData] = useState<ICategory[]>([]);

  useRequest(() => categoryService.getChildrenByCategoryId(currentCategoryId), {
    onSuccess(categoryList) {
      setTableData(categoryList);
    },
    refreshDeps: [currentCategoryId]
  });
  return { tableData };
}

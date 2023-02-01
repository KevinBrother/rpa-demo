import { Button } from 'antd';
import React, { useState } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { PlusOutlined } from '@bixi-design/icons';
import { observer } from 'mobx-react';
import { getColumns, useCategoryList } from './hooks';
import { cloneDeep } from 'lodash-es';
import { CategoryRootPId } from '@/utils';
import { CategoryBreadcrumb, EditDialog } from './components';

export enum EFlag {
  add = 'ADD',
  edit = 'EDIT'
}

export const defaultCategory: ICategory = {
  id: CategoryRootPId,
  pId: '',
  children: [],
  name: '',
  desc: ''
};

export default observer(function MenuList() {
  const [currentCategory, setCurrentCategory] = useState<ICategory>(defaultCategory);
  const [editCategory, setEditCategory] = useState<ICategory>(defaultCategory);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [breadCrumbs, setBreadCrumbs] = useState<ICategory[]>([]);

  function addBreadCrumb(category: ICategory) {
    const _breadCrumbs = cloneDeep(breadCrumbs);
    _breadCrumbs.push(category);
    setBreadCrumbs(_breadCrumbs);
  }

  const [flag, setFlag] = useState(EFlag.add);
  // 列表数据
  const { categoryList, runGetCategoryById, refreshGetCategoryById } = useCategoryList({ currentCategory });

  // 列定义
  const { columns } = getColumns({
    setEditCategory,
    setIsEditDialogOpen,
    setFlag,
    refreshGetCategoryById,
    setCurrentCategory,
    addBreadCrumb
  });

  function onAdd() {
    setIsEditDialogOpen(true);
    setFlag(EFlag.add);
  }

  return (
    <PageContainer>
      <div className='mb-6 flex justify-between'>
        <CategoryBreadcrumb breadCrumbs={breadCrumbs} setBreadCrumbs={setBreadCrumbs} setCurrentCategory={setCurrentCategory} />
        <Button icon={<PlusOutlined />} type='primary' onClick={onAdd}>
          创建类目
        </Button>
      </div>
      <Table striped columns={columns} dataSource={categoryList} expandable={{ showExpandColumn: false }} rowKey='id' />
      <EditDialog
        editCategory={editCategory}
        currentCategory={currentCategory}
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
        refreshGetCategoryById={refreshGetCategoryById}
        flag={flag}
      />
    </PageContainer>
  );
});
